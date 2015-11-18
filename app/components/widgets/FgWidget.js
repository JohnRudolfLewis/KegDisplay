import React from 'react';
import numeral from 'numeral';

class FgWidget extends React.Component {
	render() {
		var fg = this.props.fg;
		if (fg && fg > 0) {
			return (<li>FG : {numeral(fg).format('0.000')}</li>);
		} else {
			return null;
		}
	}
}

export default FgWidget;