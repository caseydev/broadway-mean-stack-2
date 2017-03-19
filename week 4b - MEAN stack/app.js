var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var session=require('express-session');
var passport=require('passport');
//import route defination file
var index = require('./routes/index');
var home = require('./routes/api/home');
var users = require('./routes/api/users');
var product = require('./routes/api/Product');

//database connection
var url="mongodb://localhost:27017/Meanstackdemo";
mongoose.connect("mongodb://localhost:27017/Meanstackdemo");
var connection=mongoose.connection;
  connection.on('connected', function(){
      console.log('Mongoose connected to ' + url);
  });
  connection.on("open",function () {
      console.log("Connection open on  " + url)
  });
  connection.on('error', function() {
      console.log("Sorry, there is no mongo db server running.");
      process.exit(0);
  });
  connection.on('disconnected', function() {
      console.log("oops, Connection DisConnected.")
  });
  //CORS middleware
//var allowCrossDomain = function(req, res, next) {
 //   res.header('Access-Control-Allow-Origin', '*');
//    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//    res.header('Access-Control-Allow-Headers', 'Content-Type');
//    next();
//}
  //start using express app
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride('_method'));
 //app.use(allowCrossDomain);
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'broadwaaaaaaaaaaayyyyyy',resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig');

app.use('/', index);
app.use('/api/home', home);
app.use('/api/users', users);
app.use('/api/product', product);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
