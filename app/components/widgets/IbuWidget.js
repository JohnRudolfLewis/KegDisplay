import React from 'react';
import numeral from 'numeral';

class IbuWidget extends React.Component {
	render() {

		var ibu = this.props.ibu ? this.props.ibu : 0;
		var ibuPercent = ibu;
		if (ibuPercent > 100)
			ibuPercent = 100;
		if (ibuPercent < 0)
			ibuPercent = 0;

		var ibuFullStyle = {
			height: ibuPercent + "%"
		};

		
		return (
			<div className="ibu">
				<div className="ibu-container">
					<div className="ibu-indicator">
						<div className="ibu-full" style={ibuFullStyle}></div>
					</div>
				</div>
				<p>{numeral(ibu).format('0')} IBU</p>
			</div>
			);
		
	}
}

export default IbuWidget;