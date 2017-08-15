var mongoose = require("mongoose");
mongoose.connect("mongodb://almazon:tareksalem/1@almazon-shard-00-00-oiut1.mongodb.net:27017,almazon-shard-00-01-oiut1.mongodb.net:27017,almazon-shard-00-02-oiut1.mongodb.net:27017/almazon?ssl=true&replicaSet=almazon-shard-0&authSource=admin");
var bcrypt = require("bcrypt-nodejs");
var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String},
	confirmpassword: {type: String},
	passwordResetToken: {type: String, default: ""},
	passwordResetExpires: {type: Date, default: Date.now},
	profileimage: {type:String},
	companyname: {type: String, required: true},
	role: {type: String, required: true},
	sellerId : {type: String, required: true},
	sellerimg: {type: String, required: true}
});
userSchema.methods.encryptPassword = function (password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};
userSchema.methods.validPassword = function (password) {
	'use strict';
	return bcrypt.compareSync(password, this.password);
};
userSchema.methods.encryptPassword = function (confirmpassword) {
	"use strict";
	return bcrypt.hashSync(confirmpassword, bcrypt.genSaltSync(10), null);
};
userSchema.methods.validPassword = function (confirmpassword) {
	return bcrypt.compareSync(confirmpassword, this.confirmpassword);
};
var Seller = module.exports = mongoose.model("Seller", userSchema, "users");
module.exports.createUser = function (newUser, callback) {
	newUser.save(callback);
}
