import React from 'react';
import numeral from 'numeral';

class OgWidget extends React.Component {
	render() {
		var og = this.props.og;
		if (og && og > 0) {
			return (<li>OG : {numeral(og).format('0.000')}</li>);
		} else {
			return null;
		}
	}
}

export default OgWidget;