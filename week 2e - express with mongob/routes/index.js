var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home/index', { title: 'Express Application demo' });
});
router.get('/aboutus', function(req, res, next) {
  res.render('home/aboutus', { title: 'About us',description:"Demo about us page" });
});
router.get('/contact', function(req, res, next) {
  res.render('home/contact', { title: 'Contact us',description:"Demo about us page" });
});
router.get('/service', function(req, res, next) {
  res.render('home/service', { title: 'Our Service',description:"Demo Service  page" });
});
module.exports = router;
