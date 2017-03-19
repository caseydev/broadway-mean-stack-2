var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

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
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.Password);
};
var model=mongoose.model("User",userSchema);
module.exports=model;
