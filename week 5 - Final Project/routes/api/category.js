var express = require('express');
var router = express.Router();
var Category=require('../../models/category');
var Products = require('../../models/product');

/* GET category listing. */
router.get('/', function(req, res, next) {
    Category.find({'Active':true},function(err,data){
        if(err){
            res.status(500).json(err);
        }
        if(!data) {
            return res.status(404).send('Not Found');
        }

        res.status(200).json('respond with a resource');

    });
});

router.get('/productbycategory', function(req, res, next) {
    Category.find({'Active':true},function(err,data){
        if(err){
            res.status(500).json(err);
        }
        if(!data) {
            return res.status(404).send('Not Found');
        }

        res.status(200).json('respond with a resource');

    });
});
router.get('/NavigationMenu', function(req, res, next) {
    Category.find({'showInMainNavigation':true},function(err,data){
        if(err){
            res.status(500).json(err);
        }
        if(!data) {
            return res.status(404).send('Not Found');
        }
        res.status(200).json(data);

    });
});
  router.get('/create', function(req, res, next) {
        res.status(200).json('respond with a resource');

    });

module.exports = router;
