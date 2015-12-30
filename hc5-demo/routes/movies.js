var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  req.getConnection(function(err, connection){
    connection.query('SELECT * FROM movies',function(err,results) {
      res.locals.data = results;
      res.render('movies/index');
    });
  });
});

router.get('/add', function(req, res) {
  res.render('movies/add');
});

router.post('/add', function(req, res) {
  req.getConnection(function (err, connection) {
    var data = {
        title    : req.body.title,
        year     : req.body.year,
        director : req.body.director,
        rating   : req.body.rating 
    };
    connection.query("INSERT INTO movies set ? ", [data], function(err, results) {
      res.redirect('/movies');
    });
  });
});

router.get('/edit/:id', function(req, res) {
  var id = req.params.id;
  req.getConnection(function(err, connection){
    connection.query('SELECT * FROM movies WHERE id = ?', [id], function(err, results) {
      res.locals.data = results[0];
      res.render('movies/edit');
    });
  }); 
});

router.post('/edit/:id', function(req, res) {
  var id = req.params.id;
  req.getConnection(function (err, connection) {
    var data = {
        title    : req.body.title,
        year     : req.body.year,
        director : req.body.director,
        rating   : req.body.rating 
    };
    connection.query("UPDATE movies set ? WHERE id = ? ", [data,id], function(err, results) {
      res.redirect('/movies');
    });
  });
});

router.get('/delete/:id', function(req, res) {
  var id = req.params.id;
  req.getConnection(function (err, connection) {
    connection.query("DELETE FROM movies WHERE id = ? ", [id], function(err, results) {
         res.redirect('/movies');
    });
  });
});

module.exports = router;
