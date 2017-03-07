var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render("Product/index",{title:'product landing page'});
});
router.get('/details', function(req, res, next) {
  res.render("Product/details",{title:'product details page'});
});
module.exports = router;
