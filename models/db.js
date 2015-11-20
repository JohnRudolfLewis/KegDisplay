var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pourSchema = new mongoose.Schema({
	quantity: {type: Number, default: 0},
	date: {type: Date, default: Date.now},
	tap: {type: Schema.Types.ObjectId, ref: 'Tap'}
});

var kegSchema = new mongoose.Schema({
	brewery: String,
	name: String,
	style: String,
	notes: String,
	srm: Number,
	ibu: Number,
	og: Number,
	fg: Number,
	abv: Number,
	balance: Number,
	calories: Number,
	quantityInitial: Number,
	quantityPoured: Number,
	quantityRemaining: Number
});

var tapSchema = new mongoose.Schema({
	kegerator: String,
	handle: String,
	keg: {type: Schema.Types.ObjectId, ref: 'Keg'}
});

module.exports = {
	Keg: mongoose.model('Keg', kegSchema),
	Tap: mongoose.model('Tap', tapSchema),
	Pour: mongoose.model('Pour', pourSchema)
};