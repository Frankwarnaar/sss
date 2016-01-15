var express = require('express');
var path = require('path'); //Zit ook in module

// Routers
var indexRouter = require('./routes/index'); //Haal index module op, vanuit ander bestand. app.get wordt afgehandeld in routers
var carsRouter = require('./routes/cars'); //haal cars module op

// App setup
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); //de views verwijst naar views in ander mapje (views is en ejs path.join plakt 'views' achter directories)
app.set('view engine', 'ejs'); //Hier laad je de templating engine 'ejs'

// Connect routers to routes
app.use('/', indexRouter); //Als er niks achter de slah wordt ingevoerd, laad indexrouter
app.use('/cars', carsRouter); //Laad carsRouter als er /cars wordt ingevoerd. in de cars router kun je hierdoor weer iets gaan afvangen wat achter /cars/ komt

app.listen(3000, function(){
  console.log("Started on port 3000");
});