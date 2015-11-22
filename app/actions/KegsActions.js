import alt from '../alt';

class KegsActions {
	constructor() {
		this.generateActions(
			'getKegsSuccess',
			'getKegsFail'
		);
	}

	getKegs() {
		$.ajax({ url: '/api/kegs' })
			.done((data) => {
				this.actions.getKegsSuccess(data);
			})
			.fail((jqXhr) => {
				this.actions.getKegsFail(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);//jqXhr.responseJSON.message)
			});
	}

}

export default alt.createActions(KegsActions);