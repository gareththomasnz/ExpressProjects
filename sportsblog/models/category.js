var mongoose = require('mongoose');

//Category schema
var categorySchema = mongoose.Schema({
	title: {
		type: String
	},
	description: {
		type: String
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

var Category = module.exports = mongoose.model('Category', categorySchema);

// Get Categories
module.exports.getCategories = function(callback, limit){
	Category.find(callback, { sort: 'name'}).limit(limit);
}


// Add Category
module.exports.addCategory = function(category, callback){
	Category.create(category, callback);
}

// Get Single Category
module.exports.getCategoryById = function(id, callback){
	Category.findById(id, callback);
}

// Update Category
module.exports.updateCategory = function(query, update, options, callback){
	Category.findOneAndUpdate(query, update, options, callback);
};