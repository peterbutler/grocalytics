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

  postComments: function( req, res) {},
}