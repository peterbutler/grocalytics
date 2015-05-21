var JSX = require('node-jsx').install(),
  React = require('react')

module.exports = {

  index: function(req, res) {
      // Render our 'home' template
      res.render('home', {
       });
  },

  getComments: function(req, res) { res.json([{"author": "Pete Hunt", "text": "This is one comment"}, {"author": "Jordan Walke", "text": "This is *another* comment"} ]
);},

  postComments: function( req, res) {},
}