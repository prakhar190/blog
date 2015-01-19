var express = require('express');
var router = express.Router();

var User = require('../models/user')

/* GET users listing. */
router.get('/', function(req, res) {
  //res.send('respond with a resource');
  res.render('users');
});


router.post('/savedata', function(req, res) {
	var user = new User({title:req.param('title'),address:req.param('address')});
	user.save(function(err){
		if(err)
			res.redirect("/users")
		
		res.redirect('/')
	});
});
router.post('/deletedata',function (req,res){
	User.remove({title:req.param('title')},function (err){
     if(err) throw err;

	});

res.redirect('/');

});
router.get('/delete', function(req, res) {
  
  res.render('delete');
});
router.get('/read',function(req, res){
	
	res.render('read');
});
router.post('/readdata',function(req,res){
	var getResult = function(fn){
		
		
	    User.findOne({title:req.param('title')},function(err, data) {
	    	if (err) return fn(err)
         
            console.log(data.title);
            
        	return fn(null,data);
            
		})  
	}

	getResult(function(err,data){
		
		if (err) console.log(err);
		console.log(data);
		res.render('readdata', {data:data});
	});

});

module.exports = router;
