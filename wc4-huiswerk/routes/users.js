var express = require('express');
var router = express.Router();

// Create routes for the following URL's

// [GET] /users

router.get('/', function(req, res){
	req.getConnection(function(err, connection){
		if(err){return next(err);}
		connection.query('SELECT * FROM users', function(err, records){
			if(err){return next(err);}
			console.log(records);
			res.locals.users = records;
			res.locals.title = 'users';
			res.render('users/index');
		});
	});
});

module.exports = router;