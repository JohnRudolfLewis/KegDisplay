import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
	constructor() {
		this.bindActions(HomeActions);
		this.taps = [];
	}

	onGetTapsSuccess(data) {
		this.taps = data;
	}

	onGetTapsFail(errorMessage) {
		toastr.error(errorMessage);
	}
}

export default alt.createStore(HomeStore);