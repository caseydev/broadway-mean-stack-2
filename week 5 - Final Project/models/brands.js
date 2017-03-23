var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var BrandSchema=Schema({
    Name:{type:String,require:true},
    Image:{type:String},
    Description:{type:String},
    IsActive:{type:Boolean}
});

var model=new mongoose.model("Brand",BrandSchema);
module.export=model;