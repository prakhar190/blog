var express = require('express');
var router = express.Router();
var User = require('../models/user')

router.get('/', function(req, res) {
  


  res.render('update');
});
router.post('/updatedata', function(req, res) {
	var query={title:req.param('title')};
	User.findOneAndUpdate(query,{title:req.param('title'),address:req.param('address')},
		   function (err,data){
		   	if(err) throw err;

		   });

		res.redirect('/')
	
	
	})

module.exports = router;