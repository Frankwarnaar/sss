var express = require('express');
var multer = require('multer');
var mysql = require('mysql');
var myConnection = require('express-myconnection');


var path = require('path');
var app = express();

// Worden alle routers al geladen?
var fileRoutes = require('./routes/files');
var userRoutes = require('./routes/users');

// Setup serveren van statische bestanden
var upload = multer({dest: 'public/uploads/'});

// Setup de view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(myConnection(mysql, {
	host: 'localhost',
	user: 'student',
	password: 'serverSide',
	port: 3306,
	database: 'student'
}, 'single'));

// Setup routing - users
app.use('/files', upload.single('file'), fileRoutes);

// Setup routing - users
app.use('/users', userRoutes);

// Setup initial routing - index
app.get('/', function(req, res) {
  res.render('index', {title: 'SSS - Exercise 4'});
});

// Start de server
app.listen(3000, function(){
  console.log('App listening at http://localhost:3000');
});