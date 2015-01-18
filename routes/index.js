var express = require('express');
var router = express.Router();
var User=require('../models/user');


/* GET home page. */
router.get('/', function(req, res) {
	
	
	var getResult = function(fn){
		
		
	    User.find(function(err, data) {
	    	if (err) return fn(err)
         
            //console.log(data);
            
        return fn(null,data);
            

})
	    
	}

	getResult(function(err,data){
		
		if (err) console.log(err);
			
			res.render('index', { title: 'Blog Application',data:data });
	});
});


module.exports = router;
