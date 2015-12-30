var express = require('express');
var fs = require('fs');
var router = express.Router();

// Create routes for the following URL's

// Voeg zelf de benodigde view nog toe
// [GET] /files
router.get('/', function(req, res){
	fs.readdir('public/uploads/', function(err, files) {
	    if(err) return next(err);
	    // geef de bestandenarray mee aan de view
	    res.locals.files = files;
	    res.locals.title = 'Files';
	    res.render('files/index');
	});
});

router.get('/upload', function(req, res){
	res.render('files/upload');
});

router.post('/upload', function(req, res){
	console.dir(req.file);
	fs.rename(req.file.path, req.file.destination + req.file.originalname, function(err){
		if(err) return next(err);
    });
    res.redirect('/files');
});

// Heb je nog meer routes nodig voor het uploaden en weergeven?




module.exports = router;