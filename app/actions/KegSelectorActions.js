import alt from '../alt';

class KegSelectorActions {
	constructor() {
		this.generateActions(
			'getKegsSuccess',
			'getKegsFail',
			'updateKegSuccess',
			'updateKegFail'
		);
	}

	getKegs() {
		$.ajax({ url: '/api/kegs' })
			.done((data) => {
				this.actions.getKegsSuccess(data)
			})
			.fail((jqXhr) => {
				this.actions.getKegsFail(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
			})
	}

	updateKeg(tapId, kegId) {
		$.ajax({ type: 'PUT', url: '/api/taps/' + tapId, data: JSON.stringify({ keg: { _id : kegId } }), contentType: 'application/json' })
			.done((data) => {
				this.actions.updateKegSuccess();
			})
			.fail((jqXhr) => {
				this.actions.updateKegFail(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
			});
	}
}

export default alt.createActions(KegSelectorActions);