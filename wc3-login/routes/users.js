var express = require('express');
var router = express.Router();

// Create routes for the following URL's
// [GET] /users
// [GET] /users/login
// [POST] /users/login

router.get("/", function(req, res){
  if(req.session.username){
    res.send("Welcome, " + req.session.username);
  } else {
    res.redirect("../views/users/login.ejs");
  }
});

router.get("/login", function(req, res){
	res.send("/users/login");
});

router.post("/login", function(req, res){
	res.send("/users/login");
});


module.exports = router;