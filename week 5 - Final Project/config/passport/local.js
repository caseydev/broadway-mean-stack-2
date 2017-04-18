const LocalStrategy = require('passport-local').Strategy;

module.exports = function(User){
    return new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
    function(username, password, done) {
        User.findOne({ UserName: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Unknown user.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Invalid password.' });
            }
            return done(null, user);
        });
    }
)};