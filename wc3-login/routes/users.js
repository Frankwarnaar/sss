var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  if(req.session.username){
    res.send('Welcome, ' + req.session.username);
  } else {
    res.render('users/login');
  }
});

router.get('/login', function(req, res){
  if(req.session.username){
    res.redirect('/users');
  } else{
    res.render('users/login');
  }
});

router.post('/login', function(req, res){
  var username = req.body.username;
  var password = req.body.password;
  if ((username === 'frank') && (password ==='pw')){
    req.session.username = username;
    res.redirect('/users');
  } else{
    res.send('Onjuist wachtwoord');
  }
});

router.get('/logout', function(req, res){
  req.session.destroy();
  res.send('U bent uitgelogd');
});

module.exports = router;