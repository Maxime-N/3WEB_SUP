var login = require('./login');
var signup = require('./signup');
var User = require('../models/user');

module.exports = function(passport){

	// Fonctions de passport par défaut pour sérializer et déserialize les utilisateurs
    passport.serializeUser(function(user, done) {
        console.log('serializing user: ');console.log(user);
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            console.log('deserializing user:',user);
            done(err, user);
        });
    });

    login(passport);
    signup(passport);

}