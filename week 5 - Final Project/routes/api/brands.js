var express = require('express');
var router = express.Router();
var Brand=require('../../models/brands');
/* GET brand listing. */
router.get('/', function(req, res, next) {
    Brand.find({'isActive':true},function(err,brands){
        res.send('respond with a resource');
    });
}).post('/', function(req, res, next) {
   var newBrand=new Brand({
       name:req.body.name,
       imageUrl:req.body.imageUrl,
       description:req.body.description,
       isActive:req.body.isActive
   });
    newBrand.save(function(err,newbrand){

    });

}).put('/', function(req, res, next) {

});
router.delete('/delete:/id', function(req, res, next) {

});
    module.exports = router;
