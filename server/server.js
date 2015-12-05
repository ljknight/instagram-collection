var path = require('path');
var express = require('express');
// middleware
var morgan = require('morgan');
var parser = require('body-parser');

var app = express();

// logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

var port = process.env.PORT || 8080;

// serve static files
app.use(express.static(path.resolve(__dirname, '..', 'app')));

app.listen(port, function(err) {
  if (err) {
    console.error(err);
  } else {
    console.log('listening on port: ', port);
  }
});

module.exports = app;
