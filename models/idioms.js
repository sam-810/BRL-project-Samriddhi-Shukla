
var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var IdiomSchema = new Schema({
  idiom: {
    type: String,
    required: true,
    unique: true
  },
  link: {
    type: String,
    required: false
  }
});


var Idiom = mongoose.model("Idiom", IdiomSchema);


module.exports = Idiom;
