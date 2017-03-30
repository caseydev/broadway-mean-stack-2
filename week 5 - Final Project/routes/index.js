var express = require('express');
var path=require('path');
var router = express.Router();
const chalk = require('chalk');

/* GET landing page. */

module.exports=function(app)
  {
        router.get('/', function(req, res, next) {
             console.log(chalk.blue.underline.bold(path.resolve(app.get('views'))));
            res.sendFile(app.get('views') + "index.html");
        });
    return router;
  };

