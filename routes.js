var JSX = require('node-jsx').install();
var React = require('react');


module.exports = {

  index: function(req, res) {
    // Render our 'home' template
    res.render('home', {
    });
  },

  getItems: function(req, res) {
    Item.find({}, function(err, docs) {
      response = [];
      for (var i in docs) {
        response[i] = docs[i]._doc;
      }
      res.json(response);
    });
  },

  postItems: function(req, res) {
    var newItem = new Item({
      receiptText: req.body.receiptText,
      product: req.body.product,
      price: req.body.price,
      discount: req.body.discount,
      tags: req.body.tags
    });

    newItem.save(function(err, item) {
      if (err) return console.error(err);
    });
    res.json({
      'response': 'response here'
    });
  },


  postStore: function(req, res) {
    var response = {};
    // Check if this store exists
    storeDoc = {
      name: req.body.storeName,
      location: req.body.storeLocation,
    };

    Store.findOneAndUpdate(
      storeDoc,
      storeDoc,
      { new: true, upsert: true },
      function( err, foundStore ){
        res.json( foundStore );
    });
  },

  postTrip: function ( req, res ) {
  console.dir( req.body);
    var newTrip = new Trip({
      date: req.body.tripDate,
      storeId: req.body.storeId,
    });

    newTrip.save(function(err, trip) {
      if (err) return console.error(err);
      console.dir( "trip is finished saving" );
      res.json( trip );

    });

  }
};
