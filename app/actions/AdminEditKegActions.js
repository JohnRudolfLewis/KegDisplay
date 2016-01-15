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

	saveKeg(keg) {
		console.log(keg);
		//console.log(this.state.brewery);
		// var keg = {
		// 	'brewery' : this.brewery,
		// 	'name' : this.name,
		// 	'style' : this.style,
		// 	'notes' : this.notes,
		// this.srm = keg.srm;
		// this.ibu = keg.ibu;
		// this.og = keg.og;
		// this.fg = keg.fg;
		// this.abv = keg.abv;
		// this.balance = keg.balance;
		// this.calories = keg.calories;
		// this.quantityInitial = keg.quantityInitial;
		// this.quantityPoured = keg.quantityPoured;
		// this.quantityRemaining 
		// };
	}

	formChanged(key, newValue) {
		var blah = {
			'key': key,
			'newValue': newValue
		};
		this.actions.formChangedSuccess(blah);
	}
	

}

export default alt.createActions(AdminEditKegActions);