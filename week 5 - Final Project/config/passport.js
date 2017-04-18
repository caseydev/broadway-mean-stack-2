var passport = require('passport');
var User=require('../models/user');
const local = require('./passport/local')(User);
//const google = require('./passport/google');
//const facebook = require('./passport/facebook');
//const twitter = require('./passport/twitter');



passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});
// use these strategies
passport.use(local);
//passport.use(google);
//passport.use(facebook);
//passport.use(twitter);