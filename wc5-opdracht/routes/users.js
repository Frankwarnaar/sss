var express = require('express');
var router = express.Router();

// Create routes for the following URL's

// [GET] /users
router.get('/', function(req, res){
  if(req.session.username){
    res.render('users/index', {
      title: 'Welcome, ' + req.session.username
    });
  } else {
    // Redirect the user here
    res.redirect('/users/login');
  }
});

// [GET] /users/login
router.get('/login', function(req, res){
  if (req.session.username){
    res.redirect('/users');
  } else {
    res.render('users/login', {
      postUrl: '/users/login',
      error: false
    });
  }
});

// [POST] /users/login
router.post('/login', function(req, res){
  var username = req.body.username;
  var password = req.body.password;
  req.getConnection(function(err, connection){
    connection.query('SELECT * FROM users WHERE name = ? and password = ?', [username, password], function(err, results) {
      console.log(results);
      if (results.length>0){ 
        req.session.username = username;
        res.redirect('/users');
      } else{
        res.render('users/login', {
          postUrl: '/users/login',
          error: 'Gebruikersnaam en/of wachtwoord onjuist.'
        });
      }
    });
  }); 
});

router.get('/register', function(req, res) {
  res.render('users/register', {
    error: false
  });
});

router.post('/register', function(req, res) {
  if (req.body.name.trim() == '' || req.body.password.trim() == ''){
    if (req.body.name.trim = ''){
      res.render('users/register', {
        error: "The username you entered is invalid"
      });
    } else {
      res.render('users/register', {
        error: "The password you entered is invalid"
      });
    }
  }
  else {
    req.getConnection(function (err, connection) {
      var data = {
          name : req.body.name,
          password : req.body.password,
          email : req.body.email,
      };
      connection.query("INSERT INTO users set ? ", [data], function(err, results) {
        res.render('users/login', {
          postUrl: '/users/login',
          error: "Registration succesful"
        });
      });
    });
  }
});

router.get('/edit/:id', function(req, res){
  var id = req.params.id;
  req.getConnection(function(err, connection){
    connection.query("SELECT * FROM users WHERE id = ? ", [id], function(err, results){
      res.locals.data = results[0];
      res.render('users/edit');
    });
  }); 
});

router.post('/edit/:id', function(req, res) {
  if (req.body.name.trim() == '' || req.body.password.trim() == ''){
    if (req.body.name.trim = ''){
      res.render('users/edit', {
        error: "The username you entered is invalid"
      });
    } else {
      res.render('users/register', {
        error: "The password you entered is invalid"
      });
    }
  }
  else {
    req.getConnection(function (err, connection) {
      var id = req.params.id;
      var data = {
          name : req.body.name,
          password : req.body.password,
          email : req.body.email,
      };
      connection.query("UPDATE users set ? WHERE id = ? ", [data,id], function(err, results) {
        res.redirect('/users');
      });
    });
  }
});

router.get('/remove/:id', function(req, res){
  id = req.params.id
  console.log(id);
  req.getConnection(function(err, connection){
    connection.query("DELETE FROM users WHERE id = ? ", [id], function(err, results) {
      res.redirect('/users');
    });
  }); 
});

// [GET] /users/logout
router.get('/logout', function(req, res){
  // Destroy the session
  req.session.destroy();
  // Redirect to index page
  res.redirect('/users');
});

module.exports = router;