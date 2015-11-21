import React from 'react';
import {Link} from 'react-router';
import TapsStore from '../stores/TapsStore';
import TapsActions from '../actions/TapsActions';

import KegSelector from './KegSelector'

class Taps extends React.Component {
	constructor(props) {
		super(props);
		this.state = TapsStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		TapsStore.listen(this.onChange);
		TapsActions.getTaps();
	}

	componetWillUnmount() {
		TapsStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	onKegIdChange(kegId) {
		console.log(kegId);
	}

	render() {
		var tapRows = this.state.taps.map(function(tap) {
			return (
				<KegSelector key={tap._id} tap={tap} />
			);
		});

		return (
			<div className="container">
			<table className="table">
				<thead>
					<tr>
						<th>Kegerator</th>
						<th>Handle</th>
						<th>Keg</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
				{tapRows}
				</tbody>
			</table>	
			</div>
		);
	}
}

export default Taps;