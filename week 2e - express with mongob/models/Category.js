var mongoose = require('mongoose');
var categorySchema=new mongoose.Schema({
    Name:{type:String},
    Description:{type:String}
});

var model=mongoose.model("category",categorySchema);
module.exports=model;
