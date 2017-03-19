var express = require('express');
var router = express.Router();
var product=require('../models/Product');

/* GET home page. */
router.get('/', function(req, res, next) {
  //retrieving data
  product.find({'IsFeature':true}).populate('categoryId','Name').exec(function(err,data){
    if(err){
      res.render("index",{title:'error occured'});
    }
    res.render("index",{title:'Express Application demo',product:data,currentUser:req.user});

  });
});

module.exports = router;
