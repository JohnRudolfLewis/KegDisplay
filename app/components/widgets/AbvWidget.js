import React from 'react';
import numeral from 'numeral';

class AbvWidget extends React.Component {
	render() {
		var abv = (this.props.abv) ? this.props.abv : 0;

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
	}
}

export default AbvWidget;