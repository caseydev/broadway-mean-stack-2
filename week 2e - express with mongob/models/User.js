var mongoose = require('mongoose');
var userSchema=new mongoose.Schema(
  {
    FirstName:{type:String,required:true},
    LastName:{type:String,required:true},
    DOB:{type:Date,default:Date.now},
    Address:String,
    UserName:String,
    Email:{type:String,required:true},
    Password:String
  }
);
var model=mongoose.model("User",userSchema);
module.exports=model;
