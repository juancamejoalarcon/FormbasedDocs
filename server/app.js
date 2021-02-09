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
  fs = require('fs'),
  mongoose = require('mongoose'),
  compression = require('compression');

const secret = require('./config').secret;

const isProduction = process.env.NODE_ENV === 'production',
  isDevelopment = process.env.NODE_ENV === 'development',
  isLocal = (process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'local:windows') ? true : false;

let universalMode = process.env.NODE_UNIVERSAL === 'active';
const initialUseArray = [];

process.env.LAWYER_PRICE = 29;

if (!isProduction) {
  initialUseArray.push(errorhandler());
}
if (isProduction) {
  mongoose.connect(process.env.MONGODB_URI);
  mongoose.set('debug', true);
  process.env.SOFFICE_PATH = './vendor/libreoffice/opt/*/program/soffice';
}
if (isDevelopment) {
  mongoose.connect(process.env.MONGODB_URI);
  mongoose.set('debug', true);
  process.env.SOFFICE_PATH = './vendor/libreoffice/opt/*/program/soffice';
}
if (isLocal) {
  mongoose.connect('mongodb://localhost:27017/formbaseddocs');
  mongoose.set('debug', true);
  // Braintree 
  process.env.BT_ENVIRONMENT = 'Sandbox';
  process.env.BT_MERCHANT_ID = '';
  process.env.BT_PUBLIC_KEY = '';
  process.env.BT_PRIVATE_KEY = '';
  // Paypal Braintree
  process.env.BT_PAYPAL_PRIVATE_KEY = '';
  // Other path
  process.env.SOFFICE_PATH = '/Applications/LibreOffice.app/Contents/MacOS/soffice';

  process.env.AWS_SECRET_ACCESS = '';
  process.env.AWS_KEY_ID = '';
  process.env.AWS_BUCKET = '';
  // Stripe
  process.env.STRIPE_SECRET = '';
  // Paypal for stripe impl
  process.env.PAYPAL_CLIENT_ID = '';
  process.env.PAYPAL_CLIENT_SECRET = '';
}

if (universalMode) {

  const useArray = initialUseArray.concat([
    cors(),
    require('morgan')('dev'),
    bodyParser.urlencoded({
      extended: true,
      limit: '5mb'
    }),
    bodyParser.json({
      limit: '5mb'
    }),
    require('method-override')(),
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    }),
    compression()
  ]);


  // automatikdocs-dev-assets
  // region=eu-west-3
  // Access Key ID: AKIAJUFQ2F2WRK6KT7MQ
  // Secret Access Key: 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

  require('./models/User');
  require('./models/Form');
  require('./models/Comment');
  require('./models/Transaction');
  require('./config/passport');

  useArray.push(require('./routes'));

  // development error handler
  // will print stacktrace
  if (!isProduction) {
    useArray.push(function (err, req, res, next) {
      console.log(err.stack);

      res.status(err.status || 500);

      res.json({
        'errors': {
          message: err.message,
          error: err
        }
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  useArray.push(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      'errors': {
        message: err.message,
        error: {}
      }
    });
  });

  const angularUniversalApp = require('./public/automatikdocs/server/main');

  angularUniversalApp.run(
    useArray
  );

} else {

  const app = express();
  app.use(cors());
  // Normal express config defaults
  app.use(require('morgan')('dev'));
  app.use(bodyParser.urlencoded({
    extended: true,
    limit: '5mb'
  }));
  app.use(bodyParser.json({
    limit: '5mb'
  }));
  app.use(require('method-override')());
  app.use(express.static(__dirname + '/public'));

  app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }));

  // automatikdocs-dev-assets
  // region=eu-west-3
  // Access Key ID: AKIAJUFQ2F2WRK6KT7MQ
  // Secret Access Key: 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

  require('./models/User');
  require('./models/Form');
  require('./models/Comment');
  require('./models/Transaction');
  require('./config/passport');

  app.use(require('./routes'));

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/automatikdocs/browser/index.html'));
  });

  /// catch 404 and forward to error handler
  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  /// ERROR HANDLERS

  // development error handler
  // will print stacktrace
  if (!isProduction) {
    app.use(function (err, req, res, next) {
      console.log(err.stack);

      res.status(err.status || 500);

      res.json({
        'errors': {
          message: err.message,
          error: err
        }
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      'errors': {
        message: err.message,
        error: {}
      }
    });
  });

  // Start server...
  const server = app.listen(process.env.PORT || 4000, function () {
    console.log('Listening on port ' + server.address().port);
  });

}