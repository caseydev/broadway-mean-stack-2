var express = require('express');
var router = express.Router();
var product=require('../models/Product');
var User=require('../models/User');
var passport = require('passport');
var bcrypt = require('bcrypt');


/* GET home page. */
router.get('/', function(req, res, next) {
  //retrieving data
  product.find({'IsFeature':true}).populate('categoryId','Name').exec(function(err,data){
    if(err){
      res.render("home/index",{title:'error occured'});
    }
    res.render("home/index",{title:'Express Application demo',product:data});

  });
});
router.get('/aboutus', function(req, res, next) {
  res.render('home/aboutus', { title: 'About us',description:"Demo about us page" });
});
router.get('/contact', function(req, res, next) {
  res.render('home/contact', { title: 'Contact us',description:"Demo about us page" });
});
router.get('/service', function(req, res, next) {
  res.render('home/service', { title: 'Our Service',description:"Demo Service  page" });
});
router.get('/login', function(req, res, next) {
  res.render('home/login', { title: 'Login',description:"Login  page" });
});
router.post('/login',
        passport.authenticate('local', { successRedirect: '/users',
        failureRedirect: '/login',
        failureFlash: false })
);

router.get('/signup', function(req, res, next) {
  res.render('home/signup', { title: 'signup',description:"signup  page" });
});
router.post('/signup', function(req, res, next) {
  //req.checkBody('email','invalid email format').isEmail();
  var salt = bcrypt.genSaltSync(10);
  var hashPassword = bcrypt.hashSync(req.body.password, salt);
  var  newUser=new User({
    FirstName:req.body.firstname,
    LastName:req.body.lastname,
    Address:req.body.address,
    UserName:req.body.username,
    Email:req.body.email,
    Password:hashPassword
  });
  newUser.save(function (err,data) {
    if(err){
     console.log(err);
    }
    res.redirect("/");
  });
});


module.exports = router;
