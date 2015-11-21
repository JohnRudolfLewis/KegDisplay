import React from 'react';
import {Link} from 'react-router';
import KegSelectorStore from '../stores/KegSelectorStore';
import KegSelectorActions from '../actions/KegSelectorActions';

class KegSelector extends React.Component {
	constructor(props) {
		super(props);
		this.state = KegSelectorStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		KegSelectorStore.listen(this.onChange);
		KegSelectorActions.getKegs();
	}

	componetWillUnmount() {
		KegSelectorStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	handleKegChange(event) {
		KegSelectorActions.updateKeg(this.props.tap._id, event.target.value);
	}

	render() {
		var kegsOptions = this.state.kegs.map(function(keg) {
			var beerName = keg.brewery + " : " + keg.name;
			return (
				<option key={keg._id} value={keg._id}>{beerName}</option>
			);
		});


		return (
			<tr>
				<td>{this.props.tap.kegerator}</td>
				<td>{this.props.tap.handle}</td>
				<td>
					<select className="form-control" value={this.props.tap.keg ? this.props.tap.keg._id : null} onChange={this.handleKegChange.bind(this)}>
						<option></option>
						{kegsOptions}
					</select>
				</td>
			</tr>
		);
	}
}

export default KegSelector;