var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  title:  String,
  address: String
});

module.exports =  mongoose.model('User', userSchema);