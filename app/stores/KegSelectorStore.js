import alt from '../alt';
import KegSelectorActions from '../actions/KegSelectorActions';

class KegSelectorStore {
	constructor() {
		this.bindActions(KegSelectorActions);
		this.kegs = [];
	}

	onGetKegsSuccess(data) {
		this.kegs = data;
	}

	onGetKegsFail(errorMessage) {
		toastr.error(errorMessage);
	}
}

export default alt.createStore(KegSelectorStore);