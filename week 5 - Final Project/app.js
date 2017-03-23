var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');

var index = require('./routes/index');
var users = require('./routes/api/users');
var brands = require('./routes/api/brands');
var categories = require('./routes/api/category');
var auth = require('./routes/api/auth');

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// mongodb connection
var url="mongodb://localhost:27017/OnlineMeanShop";
//mongodb://username:password@hostname:port/database

mongoose.connect(url);
var connection=mongoose.connection;

connection.on('connected', function(){
    console.log('Mongoose connected to ' + url);
});

connection.on("open",function () {
    console.log("Connection open on  " + url)
});

connection.on('error', function() {
    console.log("Sorry, there is no mongo db server running.");
    process.exit(1);
});
connection.on('disconnected', function() {
    console.log("oops, Connection DisConnected.")
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'public/apps/'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index(app));
app.use('/api/users', users);
app.use('/api/brand', brands);
app.use('/api/category', categories);
app.use('/api/auth', auth);


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
  res.send(err.message);
});

module.exports = app;
