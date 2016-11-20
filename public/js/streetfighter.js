            //pour créer une div
            function newDiv(nomClass, nomId){
                var newDiv = document.createElement('div');
                var divParent = document.getElementById('perso');

                newDiv.setAttribute('class', nomClass);//donne la class à la div
                newDiv.setAttribute('id', nomId);//donne un id à la div
                
                if ((newDiv != null)&&(divParent != null)){
                    divParent.appendChild(newDiv);
                }
            }

            //pour supprimer une div
            function deleteDiv(nomId){
                //var divParent = document.getElementById('perso');
                var delDiv = document.getElementById(nomId);
                if (delDiv != null){
                    delDiv.parentNode.removeChild(delDiv); 
                }
                
            }

            //ajouter contenu dans une div
            function newContenuDiv(nomIdDiv, contenu){
                var divParent = document.getElementById(nomIdDiv);
                if (divParent != null){
                    divParent.innerHTML = contenu;
                }
            }

            //supprimer contenu dans une div
            function deleteContenuDiv(nomIdDiv){
                var divParent = document.getElementById(nomIdDiv);
                if (divParent != null){
                    divParent.innerHTML = "";
                }
            }


            // Connexion socket.io
            var socket = io.connect('http://localhost:8080');

            /* je demande le nom du joueur, mais supprimer la ligne ci-dessous
             lorsque le code sera rassemblé avec l'authentification, le chat...*/
            var username = 'Joueur';
            
            // envoie l'username au serveur et l'affiche dans le titre
            socket.emit('nouveau_joueur', username);
            document.title = username + ' - ' + document.title;

            var listJoueur = [];

            socket.on('erreur', function (messageErreur) {
                newDiv("message", "messageErreur");
                newContenuDiv("messageErreur", messageErreur);
            });
             



            socket.on('joueur_list', function (joueurList) {
                    deleteDiv("animeKen1");
                    deleteDiv("animeRyu1");
                    deleteContenuDiv("name_J1");
                    deleteContenuDiv("name_J2");

                    if (joueurList.length < 2) {
                        newDiv("message", "messageAttente");
                        newContenuDiv("messageAttente", "En attente du second joueur");
                    }

                    
                    listJoueur[0] = joueurList[0];             
                    var contenuName_J1 = '<a>J1: ' + joueurList[0] + '</a>';
                    newContenuDiv("name_J1", contenuName_J1);
                    newDiv("Ken", "animeKen1");

                    //initialise la position de Ken
                    var divKen = document.getElementsByClassName('Ken');
                    for (var zKen=0 ; zKen<divKen.length ; zKen++) {
                        divKen[zKen].style.marginLeft = "-45px";
                    };
                    marginLeftKen = -45;

                    if (joueurList.length == 2) {

                        deleteDiv("messageAttente");
                        listJoueur[1] = joueurList[1];
                        var contenuName_J2 = '<a>J2: ' + joueurList[1] + '</a>';
                        newContenuDiv("name_J2", contenuName_J2);
                        newDiv("Ryu", "animeRyu1");

                        var divRyu = document.getElementsByClassName('Ryu');
                        for (var zRyu=0 ; zRyu<divRyu.length ; zRyu++) {
                            divRyu[zRyu].style.marginLeft = "444px";
                        };
                        marginLeftRyu = 444;
                    }             
            });


//---------------------Appui Touches--------------------------
document.onkeydown=function(e) {

    //-------Touches Ken-------
    if (username == listJoueur[0]) {
        if (e.keyCode === 68) { // 68 est la touche D
            punchKen(); 
        }
        else if (e.keyCode === 39) { // 39 est la touche "->"
            droiteSolKen(); 
        }
        else if (e.keyCode === 37) { // 37 est la touche "<-"
            gaucheSolKen();
        }
        else if (e.keyCode === 40) { // 40 est la touche "fleche bas"
            if (accroupKen == false){          
                accroupiKen();
                accroupKen = true;
                setTimeout(valAccroupiKen, 1000); //temps de 1s avant de pouvoir s'accroupir a nouveau           
            }
        }
        else if (e.keyCode === 69) { // 69 est la touche E
            coupPiedKen(); 
        }
        else if (e.keyCode === 83) { // 83 est la touche S
            superCoupKen(); 
        }
        else if (e.keyCode === 90) { // 90 est la touche "Z"
            defenseKen(); 
        }
        else if (e.keyCode === 82) { // 82 est la touche "R"
            degatKen(); 
        }
        //pour le saut
        toucheKen = e.keyCode;
        toucheSautKen(toucheKen);      
    }

    //-------Touches Ryu-------
    if (username == listJoueur[1]) {
        if (e.keyCode === 68) { // 68 est la touche D
            punchRyu(); 
        }
        else if (e.keyCode === 39) { // 39 est la touche "->"
            droiteSolRyu(); 
        }
        else if (e.keyCode === 37) { // 37 est la touche "<-"
            gaucheSolRyu();
        }
        else if (e.keyCode === 40) { // 40 est la touche "fleche bas"
            if (accroupRyu == false){          
                accroupiRyu();
                accroupRyu = true;
                setTimeout(valAccroupiRyu, 1000); //temps de 1s avant de pouvoir s'accroupir a nouveau           
            }
        }
        else if (e.keyCode === 69) { // 69 est la touche E
            coupPiedRyu(); 
        }
        else if (e.keyCode === 83) { // 83 est la touche S
            superCoupRyu(); 
        }
        else if (e.keyCode === 90) { // 90 est la touche "Z"
            defenseRyu(); 
        }
        else if (e.keyCode === 82) { // 82 est la touche "R"
            degatRyu(); 
        }
        //pour le saut
        toucheRyu = e.keyCode;
        toucheSautRyu(toucheRyu);      
    }
}

//---------------les positions de l'autre joueurs-----------------------
socket.on('action_Ken', function (actionKen) {
    if (actionKen == 'punchKen') {
        punchKen(); 
    }
    else if (actionKen == 'droiteSolKen') {
        droiteSolKen(); 
    }
    else if (actionKen == 'gaucheSolKen') {
        gaucheSolKen(); 
    }
    else if (actionKen == 'accroupiKen') {
        accroupiKen(); 
    }
    else if (actionKen == 'coupPiedKen') {
        coupPiedKen(); 
    }
    else if (actionKen == 'superCoupKen') {
        superCoupKen(); 
    }
    else if (actionKen == 'defenseKen') {
        defenseKen(); 
    }
    else if (actionKen == 'sautNormalKen') {
        sautAvantKen = false;
        sautKen();
    }
    else if (actionKen == 'sautAvantKen') {
        sautAvantKen = true;
        sautKen();        
    }
    else if (actionKen == 'degatKen') {        
        degatKen();
    }
});


socket.on('action_Ryu', function (actionRyu) {
    if (actionRyu == 'punchRyu') {
        punchRyu(); 
    }
    else if (actionRyu == 'droiteSolRyu') {
        droiteSolRyu(); 
    }
    else if (actionRyu == 'gaucheSolRyu') {
        gaucheSolRyu(); 
    }
    else if (actionRyu == 'accroupiRyu') {
        accroupiRyu(); 
    }
    else if (actionRyu == 'coupPiedRyu') {
        coupPiedRyu(); 
    }
    else if (actionRyu == 'superCoupRyu') {
        superCoupRyu(); 
    }
    else if (actionRyu == 'defenseRyu') {
        defenseRyu(); 
    }
    else if (actionRyu == 'sautNormalRyu') {
        sautAvantRyu = false;
        sautRyu();
    }
    else if (actionRyu == 'sautAvantRyu') {
        sautAvantRyu = true;
        sautRyu();        
    }
    else if (actionRyu == 'degatRyu') {        
        degatRyu();
    }
});