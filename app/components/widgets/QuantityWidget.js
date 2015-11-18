import React from 'react';
import numeral from 'numeral';

class QuantityWidget extends React.Component {
	render() {
		var keg = this.props.keg;
		var quantityInitial = keg.quantityInitial || 0;
		var quantityRemaining = keg.quantityRemaining || 0;

		var percentRemaining = 0;
		if (quantityInitial > 0 && quantityRemaining > 0) {
			percentRemaining = quantityRemaining / quantityInitial * 100;
		}

		var kegclass = "keg-full";
		if (percentRemaining <= 0) {
			kegclass += " keg-empty";
		} else if (percentRemaining < 15) {
			kegclass += " keg-red";
		} else if (percentRemaining < 25) {
			kegclass += " keg-orange";
		} else if (percentRemaining < 45) {
			kegclass += " keg-yellow";
		} else if (percentRemaining < 100) {
			kegclass += " keg-green";
		} else {
			//kegclass = "keg-full";
		}

		var kegstyle = {
			height: percentRemaining + "%"
		};

		
		if (keg && quantityInitial && quantityRemaining) {
			return (
				<td className="keg">
					<div className="keg-container">
						<div className="keg-indicator">
							<div className={kegclass} style={kegstyle}></div>
						</div>
					</div>
					<p>{numeral(keg.quantityRemaining).format(0)} fl oz remaining</p>					
				</td>
			);
		} else {
			return (<td></td>)
		}
	}
}

export default QuantityWidget;