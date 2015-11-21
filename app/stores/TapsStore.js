import alt from '../alt';
import TapsActions from '../actions/TapsActions';

class TapsStore {
	constructor() {
		this.bindActions(TapsActions);
		this.taps = [];
		this.kegs = [];
	}

	onGetTapsSuccess(data) {
		this.taps = data;
	}

	onGetTapsFail(errorMessage) {
		toastr.error(errorMessage);
	}

	onGetKegsSuccess(data) {
		this.kegs = data;
	}

	onGetKegsFail(errorMessage) {
		toastr.error(errorMessage);
	}
}

export default alt.createStore(TapsStore);