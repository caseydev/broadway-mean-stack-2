var mongoose = require('mongoose');
var reviewSchema=new mongoose.Schema({
    title:{type:String},
    feebackText:{type:String}
});

var productSchema=new mongoose.Schema(
  {
    Title:{type:String,required:true, trim: true},
    Price:{type:Number,required:true},
    Brand:{type:String,required:true},
    category:{type:String},
    Description:{type:String},
    Rating:{type:Number},
    Review:[reviewSchema]
  }
);
var model=mongoose.model("product",productSchema);
module.exports=model;
