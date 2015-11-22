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
					<td><Link to={`/admin/kegs/${keg._id}`} className="btn btn-default" role="button">Edit</Link></td>
				</tr>
			);
		});

		return (
			<div className="container">

			<AdminNavBarWidget activeNav="kegs" />

			<table className="table">
				<tbody>
				{kegsRows}
				</tbody>
			</table>

			<Link to={'/admin/kegs/new'} className="btn btn-default" role="button">New</Link>

			
			</div>
		);
	}
}

export default Kegs;