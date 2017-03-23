var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var CategorySchema=new Schema({
    Name:{type:String,require:true},
    ParentCategory:{type:Number,default:0},
    SubCategory:[{type:String}],
    Description:{type:String},
    IsActive:{type:Boolean}
});

var model= mongoose.model("Category",CategorySchema);
module.exports=model;