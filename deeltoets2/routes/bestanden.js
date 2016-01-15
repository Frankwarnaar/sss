var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');
var multer = require('multer');

var uploader = multer({ dest: 'publiek/upload_dir/'});

// Opdracht 5
router.get("/", function(req,res,next){
	// Lees de map publiek/upload_dir, haal hier de files uit en stop ze in var files, render die naar de view bestanden/index
	fs.readdir('publiek/upload_dir', function(err, files) {
	    if(err) return next(err);
	    // geef de bestandenarray mee aan de view
	    res.locals.files = files;
	    res.render('bestanden/index');
	});

});

router.get("/upload", function(req,res,next){
  res.render("bestanden/upload");
})


// Opdracht 6
router.post("/upload", uploader.single('bestand'), function(req,res,next){
	// Rename de file naar de oorspronkelijke naam
	console.dir(req.file);
	fs.rename(req.file.path, req.file.destination + req.file.originalname, function(err){
		if(err) return next(err);
    });
    res.redirect('/bestanden');
})

module.exports = router;