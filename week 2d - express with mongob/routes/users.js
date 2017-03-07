var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("users/index",{title:'Users Landing page'});
});
router.get('/details', function(req, res, next) {
  res.render("users/details",{title:'Users details Page'});
});
module.exports = router;
