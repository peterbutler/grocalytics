var JSX = require('node-jsx').install(),
  React = require('react')

module.exports = {

  index: function(req, res) {
      // Render our 'home' template
      res.render('home', {
       });
  },

  getComments: function(req, res) {
	  response = [
		  {
			  'receiptText' : 'PRODUCT1',
			  'product'     : 'Cheddar Cheese',
			  'price'       : '5.99',
			  'discount'    : '1.00',
			  'tags'        : 'cheese, dinner',
		  },
		  {
			  'receiptText' : 'PRODUCT2',
			  'product'     : 'Wheat Bread',
			  'price'       : '3.99',
			  'discount'    : '0',
			  'tags'        : 'bread, lunch',
		  }

	  ]
	  res.json( response );
	},

  postItems: function( req, res) {
    console.dir( req.body );
    var newItem = new Item({
      receiptText: req.body.receiptText
    , product: req.body.product
    , price: req.body.price
    , discount: req.body.discount
    , tags: req.body.tags
    });

    newItem.save(function(err, item) {
      if (err) return console.error(err);
      console.dir(item);
    });
    res.json( {'response': 'response here'})
  },
}
