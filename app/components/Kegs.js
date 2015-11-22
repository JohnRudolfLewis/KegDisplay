import React from 'react';
import {Link} from 'react-router';
import KegsStore from '../stores/KegsStore';
import KegsActions from '../actions/KegsActions';


import AdminNavBarWidget from './widgets/AdminNavBarWidget'

class Kegs extends React.Component {
	constructor(props) {
		super(props);
		this.state = KegsStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		KegsStore.listen(this.onChange);
		KegsActions.getKegs();
	}

	componetWillUnmount() {
		KegsStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}


	render() {
		var kegsRows = this.state.kegs.map(function(keg) {
			return (
				<tr key={keg._id}>
					<td>{keg.brewery} : {keg.name}</td>
					<td><button type="button" className="btn">Edit</button></td>
				</tr>
			);
		});

		return (
			<div className="container">

			<AdminNavBarWidget />

			<table className="table">
				<tbody>
				{kegsRows}
				</tbody>
			</table>
			
			</div>
		);
	}
}

export default Kegs;