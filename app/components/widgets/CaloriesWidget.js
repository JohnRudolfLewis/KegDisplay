import React from 'react';
import numeral from 'numeral';

class CaloriesWidget extends React.Component {
	render() {
		var calories = this.props.calories;
		if (calories && calories > 0) {
			return (<li>Calories : {numeral(calories).format('0')}</li>);
		} else {
			return null;
		}
	}
}

export default CaloriesWidget;