var express = require('express');
var router = express.Router();
var User=require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
//retrieving data
  User.find(function(err,data){
    if(err){
      res.render("users/index",{title:'error occured'});
    }
    console.log(data);
    res.render("users/index",{title:'Users Landing page',users:data});

  });
});

router.get('/create', function(req, res, next) {
  res.render("users/create",{title:'Users create page'});
});
router.post('/create', function(req, res, next) {
  //saving data
  var user=new User({
    FirstName:req.body.FirstName,
    LastName:req.body.LastName,
    DOB:req.body.DOB,
    Address:req.body.Address,
    //UserName:req.body.title,
    Email:req.body.Email
  });
  user.save(function(err,data){
    if(err){
      console.log(err);
    }
    console.log(data);
    res.redirect("/users");
  });
});
router.get('/details', function(req, res, next) {
  res.render("users/details",{title:'Users details Page'});
});
module.exports = router;
