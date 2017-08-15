var mongoose = require("mongoose");
var random = require("mongoose-random");
var Schema = mongoose.Schema;
mongoose.connect("mongodb://almazon:tareksalem/1@almazon-shard-00-00-oiut1.mongodb.net:27017,almazon-shard-00-01-oiut1.mongodb.net:27017,almazon-shard-00-02-oiut1.mongodb.net:27017/almazon?ssl=true&replicaSet=almazon-shard-0&authSource=admin");
var productSchema = new Schema({
	productTitle: {type:String, required: true},
	productDescription: {type: String, required: true},
	productCategoryName: {type: String, required: true},
	productImage: {type: String, required: true},
	productPuplisher: {type:String, required: true},
	productDate: {type: Date, required: true},
	productPrice: {type: String, required: true},
	productCount: {type: Number, required: true}

});
var Product = module.exports = mongoose.model("Product", productSchema, "products");
