const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var leaderSchema = new Schema({
  name : {
    type : String,
    required: true
  },
  image: {
    type: String,
    required: true
},
designation: {
  type : String,
  required : true
},
abbr : {
  type : String,
  required:true
},
type: Boolean,
featured: {
  type: Boolean,
  default:false      
},

},{
  timestamps: true
});




var Leaders = mongoose.model('Leader', leaderSchema);

module.exports = Leaders;
