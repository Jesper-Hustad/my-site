
// import dependencies
var express = require('express'), // Used for routing https://expressjs.com/
path = require('path'), // allows path combinations https://www.npmjs.com/package/path
favicon = require('serve-favicon'), // serves the favicon from spec. folder https://www.npmjs.com/package/serve-favicon
logger = require('morgan'), // logs errors and output to terminal during node run https://www.npmjs.com/package/morgan
bodyParser = require('body-parser'), // allos parsing of req.body in POST requests https://www.npmjs.com/package/body-parser
pug = require('pug'), // pug/jade templating language https://www.npmjs.com/package/pug
timeout = require('connect-timeout'), // sets the timeout on the app before we show error https://www.npmjs.com/package/timeout
port = process.env.PORT || 3000;

// import local dependencies
require('dotenv').config(); // loads CONFIG variables from the .env top-level file

// app internal setup
var app = express(); // sets app to use express
app.set('views', [path.join(__dirname, 'views'),path.join(__dirname, '/views/pages')]); // sets up view directory
app.set('view engine', 'pug'); // sets view engine to use pug
app.use(favicon(path.join(__dirname, 'public', 'images', 'icons', 'favicon-96.png'))); // sets favicon path
app.use(logger('dev')); // uses morgan/logger to log output to terminal
app.use(bodyParser.json()); // uses bodyParser to parse req
app.use(bodyParser.urlencoded({ extended : true })); // Parses the text as URL encoded data, extended extends UTF chars

app.use(express.static(path.join(__dirname, 'public'))); // sets static file directory path
app.use(timeout('100s')); // sets timeout interval

// set up routing
var routes = require('./routes');
app.use('/', routes);

// error catching
// stacktrace in dev., dislay error page in prod
// app.use(function (req, res, next) {
  
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// app.use(function (err, req, res, next) {
//   res.status(err.status || 404);
//   console.log('error', err);
//   res.render('error', {});
// });

// serve the app on PORT variable
var server = app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('App running at ', port)
  }
});
