var LocalStrategy   = require('passport-local').Strategy;
var User = require('../models/user');
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport){

	passport.use('login', new LocalStrategy({
            passReqToCallback : true
        },
        function(req, username, password, done) { 
            User.findOne({ 'username' :  username }, // Vérification que l'utilisateur existe
                function(err, user) {
                    if (err)
                        return done(err);
                    if (!user){
                        return done(null, false, req.flash('message', 'User Not found.')); // Si l(utilisateur n'existe pas, renvoi une erreur)                
                    }
                    if (!isValidPassword(user, password)){
                        return done(null, false, req.flash('message', 'Invalid Password')); // Si mauvais mot de passe, redirection vers le login
                    }
                    return done(null, user); // Login avec succès
                }
            );

        })
    );

    var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password); // On compare le mot de passe saisi par l'utilisateur avec le mot de passe hashé
    }
    
}