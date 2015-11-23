import alt from '../alt';
import AdminEditKegActions from '../actions/AdminEditKegActions';

class AdminEditKegStore {
	constructor() {
		this.bindActions(AdminEditKegActions);
	}

	onGetKegSuccess(keg) {
		//console.log(data);
		//this.keg = data;
		this.brewery = keg.brewery;
		this.name = keg.name;
		this.style = keg.style;
		this.notes = keg.notes;
		this.srm = keg.srm;
		this.ibu = keg.ibu;
		this.abv = keg.abv;
	}

	onGetKegFail(errorMessage) {
		toastr.error(errorMessage);
	}

	onFormChangedSuccess(blah) {
		//console.log(blah);
		this[blah.key] = blah.newValue;
	}
}

export default alt.createStore(AdminEditKegStore);