var mongoose = require('mongoose');
var productSchema=new mongoose.Schema(
  {
    Title:String,
    Price:Number,
    Brand:String,
    category:String,
    Description:String
  }
)
var model=mongoose.model("product",productSchema);
module.exports=model;
