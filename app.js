var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
var connectMongoDb = require('./config/connection');
//var passport = require('passport');
//var { loginCheck } = require('./aut/passport');

//var  collection= require('./users.js');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');
var dashboardRouter = require('./routes/dashboard');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
// These entries inform the app to use the followings
app.use(logger('dev'));

// They are needed to convert the data into json
app.use(express.json());
//For BodyParsing
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
//it informs the apps to use the public folder
app.use(express.static(path.join(__dirname, 'public')));


// serving static files
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', loginRouter);
app.use('/', signupRouter);
app.use('/', dashboardRouter);

// For passport 
//app.use(passport.initialize());
//app.use(passport.session());

// Start the mongoose server
connectMongoDb();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
