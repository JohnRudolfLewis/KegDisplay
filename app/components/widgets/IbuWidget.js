import React from 'react';
import numeral from 'numeral';

class IbuWidget extends React.Component {
	render() {
		var keg = this.props.keg;
		var ibu = keg.ibu || 0;

		if (ibu > 100)
			ibu = 100;
		if (ibu < 0)
			ibu = 0;

		var ibuFullStyle = {
			height: ibu + "%"
		};

		if (keg && keg.ibu) {
			return (
				<td className="ibu">
					<div className="ibu-container">
						<div className="ibu-indicator">
							<div className="ibu-full" style={ibuFullStyle}></div>
						</div>
					</div>
					<p>{numeral(keg.ibu).format('0')} IBU</p>
				</td>
				);
		} else {
			return (<td></td>);
		}
	}
}

export default IbuWidget;