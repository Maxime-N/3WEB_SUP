var LocalStrategy   = require('passport-local').Strategy;
var User = require('../models/user');
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport){

	passport.use('signup', new LocalStrategy({
            passReqToCallback : true 
        },
        function(req, username, password, done) {
            findOrCreateUser = function(){
                User.findOne({ 'username' :  username }, function(err, user) {
                    if (err){
                        return done(err); // Si une erreur se produit avec le nom d'utilisateur
                    }
                    if (user) {
                        return done(null, false, req.flash('message','This user already exists')); // Si l'utilisateur existe déjà, on le prévient
                    } else {
                        var newUser = new User(); // Si le nom d'utilisateur est disponible, on le créer

                        // Définition des paramètres demandés
                        newUser.username = username;
                        newUser.password = createHash(password); // Hashage du mot de passe, pour la sécurité
                        newUser.langage = req.param('langage');

                        // Sauvegarde de l'utilisateur
                        newUser.save(function(err) {
                            if (err){
                                throw err; // Si une erreur se passe pendant l'enregistrement
                            }
                            return done(null, newUser); // Sinon, succès et création de l'utilisateur
                        });
                    }
                });
            };
            process.nextTick(findOrCreateUser);
        })
    );

    // Création du hash du mot de passe grâce au module bcrypt
    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }
}