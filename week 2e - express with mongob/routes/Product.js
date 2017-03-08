var express = require('express');
var router = express.Router();
var product=require('../models/Product');
/* GET users listing. */
router.get('/', function(req, res, next) {

  //retrieving data
  product.find(function(err,data){
    if(err){
      res.render("Product/index",{title:'error occured'});
    }
    console.log(data);
    res.render("Product/index",{title:'product landing page',product:data});

  });

});
router.get('/create', function(req, res, next) {
  res.render("Product/create",{title:'product create page'});
});
router.post('/create', function(req, res, next) {
  //saving data
  var product1=new product({
   Title:req.body.title,
    Price:req.body.price,
    Brand:req.body.brand,
    category:req.body.category,
    Description:req.body.description
  });
   product1.save(function(err,data){
     if(err){
       console.log(err);
     }
     console.log(data);
     res.redirect("/Product");
   });
});
router.get('/details', function(req, res, next) {
  res.render("Product/details",{title:'product details page'});
});
module.exports = router;
