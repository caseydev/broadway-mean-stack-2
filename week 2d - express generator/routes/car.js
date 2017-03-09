var express = require('express');
var router = express.Router();
const carData = require('../models/data.json');

/* GET Car home page. */
router.get('/', function(req, res, next) {
    const models = carData.models;
  //res.status(200).json({ models });
  res.render("cars/index",{title:"Cars model",cars:models})
});
router.get('/details/:carId', function(req, res, next) {
  const carId = req.params.carId ;
  const models = carData.cars.filter((m) => m.modelId == carId);
  res.render("cars/details",{title:"Cars model",cars:models})
});
module.exports=router;
