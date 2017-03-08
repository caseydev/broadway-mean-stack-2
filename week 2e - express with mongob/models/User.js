var mongoose = require('mongoose');
var userSchema=new mongoose.Schema(
  {
    FirstName:String,
    LastName:String,
    DOB:Date,
    Address:String,
    UserName:String,
    Email:String
  }
);
var model=mongoose.model("user",userSchema);
module.exports=model;
