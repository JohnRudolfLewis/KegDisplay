import React from 'react';
//import {Link} from 'react-router';
import AdminEditKegStore from '../stores/AdminEditKegStore';
import AdminEditKegActions from '../actions/AdminEditKegActions';


import AdminNavBarWidget from './widgets/AdminNavBarWidget'
import SrmWidget from './widgets/SrmWidget';
import IbuWidget from './widgets/IbuWidget';
import AbvWidget from './widgets/AbvWidget';

class AdminEditKeg extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = AdminEditKegStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		AdminEditKegStore.listen(this.onChange);
		AdminEditKegActions.getKeg(this.props.params.kegId);
		console.log('componentDidMount');
	}

	componetWillUnmount() {
		AdminEditKegStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	makeValueLink(key) {
		return {
			value: this.state[key],
			requestChange: function(newValue) {
				//console.log(newValue);
				AdminEditKegActions.formChanged(key, newValue);
				//console.log('blah');
			}
		}
	}
	
	render() {
		return(
			<div className="container">

			<AdminNavBarWidget activeNav="kegs" />

			<form>
				<div className="form-group">
    				<label htmlFor="breweryName">Brewery name</label>
    				<input type="text" className="form-control" id="breweryName" placeholder="Brewery name" valueLink={this.makeValueLink('brewery')} />
  				</div>

				<div className="form-group">
    				<label htmlFor="beerName">Beer name</label>
    				<input type="text" className="form-control" id="beerName" placeholder="Beer name" valueLink={this.makeValueLink('name')} />
  				</div>

  				<div className="form-group">
    				<label htmlFor="style">Style</label>
    				<input type="text" className="form-control" id="style" placeholder="style" valueLink={this.makeValueLink('style')} />
  				</div>

  				<div className="form-group">
    				<label htmlFor="notes">Notes</label>
    				<textarea className="form-control" rows="5" id="notes" valueLink={this.makeValueLink('notes')} />
  				</div>

  				<div className="form-group">
    				<label htmlFor="srm">SRM</label>
    				<input type="range" min="0" max="40" step="0.1"  id="srm" valueLink={this.makeValueLink('srm')}  />
    				<SrmWidget srm={this.state.srm} />
  				</div>

  				<div className="form-group">
    				<label htmlFor="ibu">IBU</label>
    				<input type="range" min="0" max="200" step="1"  id="ibu" valueLink={this.makeValueLink('ibu')}  />
    				<IbuWidget ibu={this.state.ibu} />
  				</div>

				<div className="form-group">
    				<label htmlFor="abv">ABV</label>
    				<input type="range" min="0" max=".2" step=".001"  id="abv" valueLink={this.makeValueLink('abv')}  />
    				<AbvWidget abv={this.state.abv} />
  				</div>

			
			</form>

			</div>
		);
	}
}

export default AdminEditKeg;