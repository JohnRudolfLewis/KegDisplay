import alt from '../alt';

class AdminEditKegActions {
	constructor() {
		
		this.generateActions(
			'getKegSuccess',
			'getKegFail',
			'formChangedSuccess'
		);
		
	}

	
	getKeg(kegId) {
		$.ajax({ url: '/api/kegs/' + kegId })
			.done((data) => {
				this.actions.getKegSuccess(data);
			})
			.fail((jqXhr) => {
				this.actions.getKegFail(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);//jqXhr.responseJSON.message)
			});
	}

	formChanged(key, newValue) {
		//console.log('formChanged');
		var blah = {
			'key': key,
			'newValue': newValue
		};
		//console.log(blah);
		this.actions.formChangedSuccess(blah);
	}
	

}

export default alt.createActions(AdminEditKegActions);