var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var BrandSchema=Schema({
    name:{type:String,require:true},
    imageUrl:{type:String},
    description:{type:String},
    isActive:{ type: Boolean, default: true }
});

var model=new mongoose.model("Brand",BrandSchema);
module.export=model;