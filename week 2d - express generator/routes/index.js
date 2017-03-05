var express = require('express');
var router = express.Router();
const User = require('../models/User');

/* GET home page. */
router.get('/', function(req, res, next) {
  //creating user object from User function class
  var user1=new User("Test1","bahadur","Lalitpur");
  var user2=new User("Test2","bahadur","KTM");
  var user3=new User("Test3","bahadur","BKT");
  var user4=new User("Test4","bahadur","PKR");

  var users=[4];//array to hold 4 user
    users[0]=user1;
    users[1]=user2;
    users[2]=user3;
    users[3]=user4;
  res.render('index/index', {
        title: 'Express' ,subheading:"This is demo",users:users});
});
router.get('/about', function(req, res, next) {

  var user1=new User("Test1","bahadur","Lalitpur");
  var user2=new User("Test2","bahadur","KTM");
  var user3=new User("Test3","bahadur","BKT");
  var user4=new User("Test4","bahadur","PKR");

  var users=[4];//array to hold 4 user
  users[0]=user1;
  users[1]=user2;
  users[2]=user3;
  users[3]=user4;
  res.render('index/about', { title: 'About us' ,subheading:"This is demo",allusers:users});
});
router.get('/contactus', function(req, res, next) {
  res.render('index/contact', { title: 'Contact us' ,subheading:"This is demo"});
});
module.exports = router;
