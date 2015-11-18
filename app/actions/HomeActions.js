import alt from '../alt';

class HomeActions {
	constructor() {
		this.generateActions(
			'getTapsSuccess',
			'getTapsFail'
		);
	}

	getTaps() {
		$.ajax({ url: '/api/taps' })
			.done((data) => {
				this.actions.getTapsSuccess(data)
			})
			.fail((jqXhr) => {
				this.actions.getTapsFail(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);//jqXhr.responseJSON.message)
			});
	}
}

export default alt.createActions(HomeActions);