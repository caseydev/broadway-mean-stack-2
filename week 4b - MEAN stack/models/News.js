var mongoose = require('mongoose');
var newsSchema=new mongoose.Schema({
    Heading:{type:String},
    Description:{type:String},
    PublishedDate:{type:Date,default:Date.now}
});

var model=mongoose.model("news",newsSchema);
module.exports=model;
