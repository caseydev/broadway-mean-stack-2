var express = require('express');
var router = express.Router();
var User=require('../../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('isAuthenticated',req.isAuthenticated());
  console.log('user session',req.user);
//retrieving data
  User.find({},function(err,data){
    if(err){
      res.json({title:'error occured'});
    }
    console.log(data);
    res.json({title:'Users Landing page',users:data,isAuthenticated:req.isAuthenticated(),currentUser:req.user});

  });
});

router.get('/details', function(req, res, next) {
  res.json({title:'Users details Page'});
});
module.exports = router;
