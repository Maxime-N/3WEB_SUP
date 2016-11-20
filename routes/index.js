var express = require('express');
var router = express.Router();

var isAuthenticated = function (req, res, next) {
	if (req.isAuthenticated())
		return next();
	res.redirect('/');
}

module.exports = function(passport){

	router.get('/', function(req, res) {
		res.render('index', { message: req.flash('message') });
	});

	router.post('/login', passport.authenticate('login', {
		successRedirect: '/streetfighter',
		failureRedirect: '/',
		failureFlash : true  
	}));

	router.get('/signup', function(req, res){
		res.render('register',{message: req.flash('message')});
	});

	router.post('/signup', passport.authenticate('signup', {
		successRedirect: '/streetfighter',
		failureRedirect: '/signup',
		failureFlash : true  
	}));

	router.get('/streetfighter', isAuthenticated, function(req, res){
		res.render('streetfighter', { user: req.user });
	});

	router.get('/signout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	return router;
}