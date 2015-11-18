import React from 'react';
import numeral from 'numeral';

class BalanceWidget extends React.Component {
	render() {
		var balance = this.props.balance;
		if (balance && balance > 0) {
			return (<li>Bitterness Ratio : {numeral(balance).format('0.0')}</li>);
		} else {
			return null;
		}
	}
}

export default BalanceWidget;