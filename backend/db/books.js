const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  title: String,
  isbn: Number,
  pagecount: Number,
  author: String,

});

module.exports = mongoose.model('books', restaurantSchema, 'books');