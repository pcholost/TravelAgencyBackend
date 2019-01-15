var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app = express();

require('./services/cookieSession')(app);

require('./models/User');
require('./models/Offer');
require('./models/OfferRating');
require('./models/Facilities');
require('./models/Order');
require('./services/passport');
require('./services/mongoConnect');

require('./routes/googleAuth')(app);
var indexRouter = require('./routes/index');
var userRouter = require('./routes/user.route');
var offerRouter = require('./routes/offer.route');
var offerRatingRouter = require('./routes/offerRating.route');
var facilitiesRouter = require('./routes/facilities.route');
var orderRouter = require('./routes/order.route');

app.use(bodyParser());
app.use('/user',userRouter);
app.use('/offer',offerRouter);
app.use('/offerRating', offerRatingRouter);
app.use('/facilities', facilitiesRouter);
app.use('/order', orderRouter);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);

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
