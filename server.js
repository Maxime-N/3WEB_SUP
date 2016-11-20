var  express = require('express'),
	 app = express(),
	 server = require('http').createServer(app),
	 ejs = require('ejs'),
	 bodyParser = require('body-parser'),
	 io = require('socket.io')(server),
	 ent = require('ent'),
	 fs = require('fs'),
	 joueurList = [];

var dbConfig = require('./db');
var mongoose = require('mongoose');
// Connect to DB
mongoose.connect(dbConfig.url);

app.use('/js', express.static(__dirname + '/public/js'));
app.use('/lib', express.static(__dirname + '/public/lib'));
app.use('/styles', express.static(__dirname + '/styles'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');


// Configuring Passport
var passport = require('passport');
var expressSession = require('express-session');
// TODO - Why Do we need this key ?
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

 // Using the flash middleware provided by connect-flash to store messages in session
 // and displaying in templates
var flash = require('connect-flash');
app.use(flash());

// Initialize Passport
var initPassport = require('./passport/init');
initPassport(passport);

var routes = require('./routes/index')(passport);
app.use('/', routes);

io.sockets.on('connection', function (socket) {

	socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });


	
	// On stocke le nom du joueur en variable de session

	socket.on('nouveau_joueur', function(username) {
	    if (joueurList.length < 2) {
	    	if ((joueurList.length == 0)||((joueurList.length == 1)&&(username != joueurList[0]))) { 		
	    		var usernameJoueur = ent.encode(username);
	    		joueurList.push(usernameJoueur);
		    	socket.broadcast.emit("joueur_list", joueurList);
		    	socket.emit("joueur_list", joueurList);
		    	socket.joueur = usernameJoueur;
	    	}
	    	else {
	    		if (joueurList.length > 1){
	    			var messageErreur = "Il y a déjà 2 joueurs dans la partie";
	    		}
	    		else if ((joueurList.length == 1)&&(username == joueurList[0])){
	    			var messageErreur = "Le nom doit etre différent de celui du joueur1";
	    		}
	    		socket.emit("erreur", messageErreur);
	    		console.log('###########', messageErreur);
	    	}  
	    }	        
	});

	socket.on('disconnect', function (message) {
		var id = joueurList.indexOf(socket.joueur);
		if (id >= 0) {
			joueurList.splice(id, 1);
		}
		socket.broadcast.emit("joueur_list", joueurList);

	});

	socket.on('action_Ken', function (actionKen) {
		socket.broadcast.emit("action_Ken", actionKen);
	});

	socket.on('action_Ryu', function (actionRyu) {
		socket.broadcast.emit("action_Ryu", actionRyu);
	});

});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page introuvable !');
});

server.listen(8080);