const http = require('http'),
    path = require('path'),
    methods = require('methods'),
    express = require('express'),
    // no se necesita bodyparser con la nueva versión de express
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cors = require('cors'),
    passport = require('passport'),
    errorhandler = require('errorhandler'),
    mongoose = require('mongoose');

const secret = require('./config').secret;

const isProduction = process.env.NODE_ENV === 'production',
      isLocal = process.env.NODE_ENV === 'local' || 'local:windows',
      isDevelopment = process.env.NODE_ENV === 'development';

const app = express();

app.use(cors());
// Normal express config defaults
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(require('method-override')());
app.use(express.static(__dirname + '/public'));

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));


if (!isProduction) {
  app.use(errorhandler());
}
if (isProduction) {
  console.log('--------PROD---------');
  console.log(process.env.MONGODB_URI);
  console.log('-----------------');
  mongoose.connect(process.env.MONGODB_URI);
} 
if (isDevelopment) {
  mongoose.connect(process.env.MONGODB_URI);
  console.log('--------DEV---------');
  console.log(process.env.MONGODB_URI);
  console.log('-----------------');

  mongoose.set('debug', true);
}
if (isLocal) {
  console.log('--------LOCALHOST---------');
  console.log(process.env.MONGODB_URI);
  console.log('-----------------');
  mongoose.connect('mongodb://localhost:27017/formbaseddocs');
  mongoose.set('debug', true);
  // Braintree
  process.env.BT_ENVIRONMENT='Sandbox';
  process.env.BT_MERCHANT_ID='7tdbfv3bq87239jm';
  process.env.BT_PUBLIC_KEY='2qhjt9fhxdw7m6z2';
  process.env.BT_PRIVATE_KEY='045c02af0a5753f7093137cb502054af';
  // Paypal Braintree
  process.env.BT_PAYPAL_PRIVATE_KEY='access_token$sandbox$6bxmmmw7h8dscxmp$811bbbcf3d60f60e1db2d312437ba1ae';
}

require('./models/User');
require('./models/Form');
require('./models/Comment');
require('./models/Transaction');
require('./config/passport');

app.use(require('./routes'));

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// ERROR HANDLERS

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use(function(err, req, res, next) {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({'errors': {
      message: err.message,
      error: err
    }});
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({'errors': {
    message: err.message,
    error: {}
  }});
});

// Start server...
const server = app.listen( process.env.PORT || 3001, function(){
  console.log('Listening on port ' + server.address().port);
});
