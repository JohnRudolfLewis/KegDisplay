import alt from '../alt';

class TapsActions {
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

	kegChanged(event) {
		console.log(event.target.value);
	}

	updateKeg(tapId, kegId) {
		$.ajax({ type: 'PUT', url: '/api/taps/' + tapId, data: JSON.stringify({ keg: { _id : kegId } }), contentType: 'application/json' })
			.done((data) => {
				console.log(data);
				this.actions.getTaps();
			})
			.fail((jqXhr) => {
				console.log(jqXhr);
			});
	}
}

export default alt.createActions(TapsActions);