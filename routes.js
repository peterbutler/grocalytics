var JSX = require('node-jsx').install(),
  React = require('react')

module.exports = {

  index: function(req, res) {
      // Render our 'home' template
      res.render('home', {
       });
  },

  getItems: function(req, res) {
    Item.find({}, function (err, docs) {
      response = [];
      for( var i in docs ){
        response[i] = docs[i]._doc;
      }
      res.json( response );
    } );
	},

  postItems: function( req, res) {
    var newItem = new Item({
      receiptText: req.body.receiptText
    , product: req.body.product
    , price: req.body.price
    , discount: req.body.discount
    , tags: req.body.tags
    });

    newItem.save(function(err, item) {
      if (err) return console.error(err);
    });
    res.json( {'response': 'response here'})
  },

  postTrip: function( req, res) {
    // Check if this store exists

    // Insert new store
    var newStore = new Store({
      name: req.body.storeName,
      location: req.body.storeLocation,
    });

    newStore.save( function( err, store ){
      if (err) return console.error(err);
    });

    var newItem = new Item({
      receiptText: req.body.receiptText
    , product: req.body.product
    , price: req.body.price
    , discount: req.body.discount
    , tags: req.body.tags
    });

    newItem.save(function(err, item) {
      if (err) return console.error(err);
    });
    res.json( {'response': 'response here'})
  },

}
