import alt from '../alt';
import KegsActions from '../actions/KegsActions';

class KegsStore {
	constructor() {
		this.bindActions(KegsActions);
		this.kegs = [];
	}

	onGetKegsSuccess(data) {
		console.log(data);
		this.kegs = data;
	}

	onGetKegsFail(errorMessage) {
		toastr.error(errorMessage);
	}
}

export default alt.createStore(KegsStore);