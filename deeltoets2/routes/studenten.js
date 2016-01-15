var express = require('express');
var router = express.Router();

var gegevens = require('../data/gegevens');

router.get("/", function(req,res,next){
  res.locals.gegevens = gegevens;
  console.log(gegevens);
  res.render("studenten/index");
})

// Opdracht 4b
router.get("/:index", function(req,res,next){
	// Stop de index waarde in de 
	var index = req.params.index;
	res.locals.gegevens = gegevens[index];
	res.render("studenten/toon");
})

module.exports = router;