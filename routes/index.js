var express = require('express');
var router = express.Router();

//Messages array
const messages = [
	{
	  text: "Hi there!",
	  user: "Amando",
	  added: new Date().toLocaleDateString("en-US")
	},
	{
	  text: "Hello World!",
	  user: "Charles",
	  added: new Date().toLocaleDateString("en-US")
	}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

module.exports = router;
