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

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.id);
    if (event.target.id == "btnSave") {
      AdminEditKegActions.saveKeg(this.state);
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

  				<div className="form-group">
    				<label htmlFor="og">OG</label>
    				<input type="text" className="form-control" id="og" valueLink={this.makeValueLink('og')}  />
  				</div>

  				<div className="form-group">
    				<label htmlFor="fg">FG</label>
    				<input type="text" className="form-control" id="fg" valueLink={this.makeValueLink('fg')}  />
  				</div>

  				<div className="form-group">
    				<label htmlFor="balance">Balance</label>
    				<input type="text" className="form-control" id="balance" value={this.state.balance}  />
  				</div>

  				<div className="form-group">
    				<label htmlFor="calories">Calories</label>
    				<input type="text" className="form-control" id="calories" value={this.state.calories}  />
  				</div>


				<div className="form-group">
    				<label htmlFor="quantityInitial">Initial Quantity</label>
    				<input type="text" className="form-control" id="quantityInitial" valueLink={this.makeValueLink('quantityInitial')}  />
    				<p>1/2 barrel - 15.5 gal - 1984</p>
    				<p>1/4 barrel - 7.75 gal - 992 ounces</p>
    				<p>1/6 barrel - 5.16 gal - 660 ounces</p>
  				</div>

  				<div className="form-group">
    				<label htmlFor="quantityPoured">Poured Quantity</label>
    				<input type="text" className="form-control" id="quantityPoured" valueLink={this.makeValueLink('quantityPoured')}  />
  				</div>

  				<div className="form-group">
    				<label htmlFor="quantityRemaining">Remaining Quantity</label>
    				<input type="text" className="form-control" id="quantityRemaining" valueLink={this.makeValueLink('quantityRemaining')}  />
  				</div>

          <div className="form-group">
            <button id="btnSave" className='btn btn-default' onClick={this.handleSubmit.bind(this)}>Save</button>
            <button id="btnCancel" className='btn' onClick={this.handleSubmit.bind(this)}>Cancel</button>
          </div>			
			</form>

			</div>
		);
	}
}

export default AdminEditKeg;