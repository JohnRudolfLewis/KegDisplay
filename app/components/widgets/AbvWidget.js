import React from 'react';
import numeral from 'numeral';

class AbvWidget extends React.Component {
	render() {
		var keg = this.props.keg;
		var abv = (keg && keg.abv) ? keg.abv : 0;

		var cups = [];
		var offTheChart = false;
		var remaining = abv * 100 * 20;

		var level = remaining;
		if (level > 100) level = 100;
		var style = { height : level + "%" };
		cups.push(<div key="0" className="abv-indicator"><div className="abv-full" style={style}></div></div>);
		remaining -= level;
		
		if (remaining > 0) {
			level = remaining;
			if (level > 100) level = 100;
			var style = { height : level + "%" };
			cups.push(<div key="1" className="abv-indicator"><div className="abv-full" style={style}></div></div>);
			remaining -= level;
		}

		if (remaining > 0) {
			cups = [];
			cups.push(<div key="2" className="abv-offthechart"></div>);
		}

		if (keg && keg.abv) {
			return (
				<div className="abv">
					<div className="abv-container">
						<div className="abv-cups">
							{cups}
						</div>
					</div>
					<p>{numeral(abv).format('0.0%')} ABV</p>
				</div>
				);
		} else {
			return (<div></div>)
		}
	}
}

export default AbvWidget;