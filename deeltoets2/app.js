var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');

var studentRouter = require('./routes/studenten');
var bestandenRouter = require('./routes/bestanden');

// App
var app = express();

// Gebruik EJS en views directory voor view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// statische bestanden
app.use(express.static(path.join(__dirname, 'publiek')));

// maak POST parameters beschikbaar in request
app.use(bodyParser.urlencoded({extended: true}));

// sessies
app.use(session({
  secret: 'asdf83hsknx',
  saveUninitialized: true,
  resave: false
}));

// homepage
app.get("/", function(req, res, next){
  res.render("index");
});

// routers
app.use("/studenten", studentRouter);
app.use("/bestanden", bestandenRouter);

// app start met luisteren op poort 3000
app.listen(3000, function(){
  console.log('App listening at http://192.168.56.101:3000');
});


module.exports = app;