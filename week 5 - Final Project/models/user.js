var mongoose=require('mongoose');
var bcrypt = require('bcrypt');

var Schema=mongoose.Schema;

var UserSchema=new Schema({
    name: String,
    email: {
        type: String,
        lowercase: true
    },
    role: {
        type: String,
        default: 'user'
    },
    password: String,
    profileImageUrl:String,
    address:String
});
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.Password);
};
module.exports= mongoose.model("User",UserSchema);

