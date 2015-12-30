var express = require('express');
var router = express.Router(); //Zo maak je hier een router van

/* GET home page. */
router.get('/', function(req, res, next) { // Je gaat de router gebruiken voor een '/'. 
  res.locals.title = "Home"; //er zit een variabele in de response. locals zorgt ervoor dat je in je template slechts title hoeft in te voeren
  res.locals.naam = "Albert";
  res.render('index'); //Stuur dit naar index.
});

module.exports = router; //exporteer router object als module naar waar hij ge"get" wordt.
