var express = require('express');
var router = express.Router();
const User = require('../models/User');

/* GET home page. */
router.get('/', function(req, res, next) {
  //creating user object from User function class
  var user1=new User("Test","bahadur","Lalitpur");
  var user2=new User("Test1","bahadur","KTM");
  var user3=new User("Test2","bahadur","BKT");
    var users=[3];//array to hold user
    users[0]=user1;
    users[1]=user2;
    users[2]=user3;
  res.render('index', {
        title: 'Express' ,subheading:"This is demo",users:users});
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About us' ,subheading:"This is demo"});
});
router.get('/contactus', function(req, res, next) {
  res.render('contact', { title: 'Contact us' ,subheading:"This is demo"});
});
module.exports = router;
