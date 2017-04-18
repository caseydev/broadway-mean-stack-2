var express = require('express');
var router = express.Router();
var passport = require('passport');

router.post('/login', passport.authenticate('local', { successRedirect: '/login-success',
    failureRedirect: '/login-failed',
    failureFlash: false })
);
router.get('/login-success', function(req, res, next) {
    res.send({currentUser:req.user});
});
router.get('/login-failed', function(req, res, next) {
    res.send({currentUser:null});
});
router.post('/register', function(req, res, next) {

    res.send('respond with a resource');
});
router.get('/logout', function(req, res) {
    req.session.destroy();
    res.redirect('/')
});

router.get('/checkauth', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
