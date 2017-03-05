var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("users/users",{title:'respond with a resource'});
});
router.get('/details/:userId', function(req, res, next) {

  res.render("users/details",{title:'User Details selected value ' + req.params.userId});
});

router.get('/create', function(req, res, next) {
  res.render("users/create",{title:'Create page'});
});
router.post('/create', function(req, res, next) {
  var sunmittedFirstName=req.body.firstname;
  var sunmittedLastName=req.body.lastname;
// save logic
  res.render("users/create",{title:'firstname ' + sunmittedFirstName + " " + sunmittedLastName});
});
module.exports = router;
