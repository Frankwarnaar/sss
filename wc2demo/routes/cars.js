var express = require('express');
var router = express.Router();

var cars = [
  {
    brand: "Toyota",
    model: "Celica"
  },
  {
    brand: "Ferrari",
    model: "F40"
  },
  {
    brand: "Tesla",
    model: "X"
  },
  {
    brand: "BMW",
    model: "i118"
  },
  {
    brand: "Audi",
    model: "A4"
  }
];

/* GET cars list. */
router.get('/', function(req, res, next) {
  res.locals.cars = cars; //Cars object wordt beschikbaar gemaakt in ejs templates
  res.render('cars/index');
});

/* GET one car by index */
router.get('/:index', function(req, res, next){
  res.locals.car = null;
  for (var i=0; i<cars.length; i++){
    if (cars[i].brand == req.params.index){
      res.locals.car = cars[i];
    }
  }
  res.locals.path = req.params.index;

  res.render('cars/show');
});


module.exports = router;
