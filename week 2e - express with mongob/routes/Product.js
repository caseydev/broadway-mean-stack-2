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
    Rating:req.body.rating,
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
router.get('/details/:id', function(req, res, next) { //findById
    //product.findById(req.params.id,function (err,data){
    product.findById(req.params.id,function (err,data){
        res.render("Product/details",{title:'product details page',product:data});
    });
});
router.put('/create', function(req, res, next) {
  console.log(req.method)
  res.render("Product/create",{title:'product update page'});
});
router.get('/delete/:id', function(req, res, next) {
    var idToDelete=req.params.id;
    console.log(idToDelete);
    product.findByIdAndRemove(idToDelete,function (err,data) {
        if(err){
        }
        res.redirect("/Product")
    });
});
module.exports = router;
