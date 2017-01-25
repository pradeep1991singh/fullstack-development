// todo schema design
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  title: String,
  body: String,
  status: String
});

module.exports = mongoose.model('Todo', TodoSchema);