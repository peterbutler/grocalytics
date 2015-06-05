// Require our dependencies
var express = require('express');
var exphbs = require('express-handlebars');
var http = require('http');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var routes = require('./routes');

// Create an express instance and set a port variable
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended: false
}))

// Set handlebars as the templating engine
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Connect to our mongo database

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  // Create your schemas and models here.
  var ItemSchema = new mongoose.Schema({
    receiptText: {
      type: String
    },
    product: String,
    price: Number,
    discount: Number,
    tags: String
  });

  Item = mongoose.model('Item', ItemSchema);

  var StoreSchema = new mongoose.Schema({
    name: String,
    location: String
  });

  Store = mongoose.model('Store', StoreSchema);


});

mongoose.connect('mongodb://localhost/groceries');

// Set /public as our static content dir
app.use("/", express.static(__dirname + "/public/"));

// Index Route
app.get('/', routes.index);

// Get Comments
app.get('/items/', routes.getItems);

// Post Comments
app.post('/items/', routes.postItems);

app.post('/trip/', routes.postTrip);

// Start server
var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});

// Initialize socket.io
var io = require('socket.io').listen(server);
