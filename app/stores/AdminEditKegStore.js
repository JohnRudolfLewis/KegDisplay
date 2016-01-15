import alt from '../alt';
import AdminEditKegActions from '../actions/AdminEditKegActions';

class AdminEditKegStore {
	constructor() {
		this.bindActions(AdminEditKegActions);
	}

	onGetKegSuccess(keg) {
		this.brewery = keg.brewery;
		this.name = keg.name;
		this.style = keg.style;
		this.notes = keg.notes;
		this.srm = keg.srm;
		this.ibu = keg.ibu;
		this.og = keg.og;
		this.fg = keg.fg;
		this.abv = keg.abv;
		this.balance = keg.balance;
		this.calories = keg.calories;
		this.quantityInitial = keg.quantityInitial;
		this.quantityPoured = keg.quantityPoured;
		this.quantityRemaining = keg.quantityRemaining;

		console.log('Notes: ' + this.notes);
	}

	onGetKegFail(errorMessage) {
		toastr.error(errorMessage);
	}

	onFormChangedSuccess(change) {
		this[change.key] = change.newValue;

		// // remember whether og or fg was changed last
		// if (change.key == "og" || change.key == "fg") {
		// 	this.lastChangeOgFg = change.key;
		// }

		// // if we just changed abv, calculate og or fg
		// if (change.key == "abv") {
		// 	if (this.lastChangeOgFg == "fg" || !this.og) {
		// 		this.og = (this.abv / 1.31) + this.fg;
		// 	} else if (this.lastChangeOgFg == "og" || !this.fg) {
		// 		this.fg = this.og - (this.abv / 1.31);
		// 	}
		// }

		// if (this.lastChangeOgFg == "fg" && this.abv) {
		// 	this.og = (this.abv / 1.31) + this.fg;
		// }

		// if (this.lastChangeOgFg == "og" && this.abv) {
		// 	this.fg = this.og - (this.abv / 1.31);
		// }

		// //  if we just changed og or ibu, calculate balance 
		// if ((change.key == "og" || change.key == "ibu") && this.og > 1 && this.ibu > 0) {
		// 	this.balance = this.ibu / ((this.og - 1) * 1000)
		// }

		// // $calfromalc = (1881.22 * ($beer['fg'] * ($beer['og'] - $beer['fg'])))/(1.775 - $beer['og']); 
		// //$calfromcarbs = 3550.0 * $beer['fg'] * ((0.1808 * $beer['og']) + (0.8192 * $beer['fg']) - 1.0004);
		// var caloriesFromAlcohol = (1881.22 * (this.fg * (this.og - this.fg)))/(1.775 - this.og);
		// var caloriesFromCarbs = 3550.0 * this.fg * ((0.1808 * this.og) + (0.8192 * this.fg) - 1.0004);
		// if (this.og == 1 && this.fg == 1) {
		// 	caloriesFromAlcohol = 0;
		// 	caloriesFromCarbs = 0;
		// }
		// this.calories = caloriesFromAlcohol + caloriesFromCarbs;
	}
}

export default alt.createStore(AdminEditKegStore);