var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
    return render("Product/index")
});
router.get('/details/:id', function(req, res) {
    var product1={
        title:"Dell pc",
        Price:120000,
        "Image":"dell34.jpg"
    };
    var product2={
        title:"Acer pc",
        Price:120000,
        "Image":"acer34.jpg"
    };
    return render("Product/details")
});
module.exports=router;