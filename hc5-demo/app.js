var express = require('express'),
    path = require('path'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser');

// Database configuration
var dbOptions = {
  host: 'localhost',
  user: 'student',
  password: 'serverSide',
  database: 'movies'
};

// Laad de movies router
var movieRoutes = require('./routes/movies');

var app = express();

// Voeg de bodyparser middleware aan de app toe (POST requests)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Voeg connectie middleware toe aan app
app.use(myConnection(mysql, dbOptions, 'single'));

// Setup de view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Setup routing - users
app.use('/movies', movieRoutes);

// Setup initial routing - index
app.get('/', function(req, res) {
  res.render('index');
});

// Start de server
app.listen(3000, function(){
  console.log('App listening at http://192.168.56.101:3000');
});