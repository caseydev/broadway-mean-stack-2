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
    categoryId:{type:mongoose.Schema.Types.ObjectId,ref:'category'},
    Description:{type:String},
    Rating:{type:Number},
    Review:[reviewSchema],
    IsFeature:{type:Boolean},
    Image:{type:String}
  }
);
var model=mongoose.model("product",productSchema);
module.exports=model;
