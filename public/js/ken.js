
var actionKen;
var iKen=0;

function positionBaseKen(){   
    newDiv("Ken", "animeKen1");
    var pxKen = marginLeftKen;
    var divKen = document.getElementsByClassName('Ken');
    for (var zKen=0 ; zKen<divKen.length ; zKen++) {          
        divKen[zKen].style.marginLeft = pxKen+"px";             
    };
    iKen--;
}

//**********Coup de poing de Ken**********
function removeDivKen1(){
   deleteDiv("animeKen2");
}

function punchKen(){   
        /*la condition iKen permet de ne pas doubler le personnage lorsque qu'il y a un 
        apuis multiple très rapide*/ 
       if (iKen == 0){
            deleteDiv("animeKen1");
            newDiv("Ken", "animeKen2");
            iKen++;
            setTimeout(removeDivKen1, 249);
            setTimeout(positionBaseKen, 250);
            actionKen = 'punchKen';
            socket.emit('action_Ken', actionKen);

            var pxKen = marginLeftKen;
            var divKen = document.getElementsByClassName('Ken');
            for (var zKen=0 ; zKen<divKen.length ; zKen++) {          
                divKen[zKen].style.marginLeft = pxKen+"px";             
            };

       }
       else {
            for(var xKen=1; xKen<=iKen; xKen++){
                deleteDiv("animeKen1");
            };
       }   
}

//**********Déplacement droite au sol Ken**********
function removeDivKen2(){
   deleteDiv("animeKen3"); 
}

function droiteSolKen(){   
       if (iKen == 0){
            deleteDiv("animeKen1"); 
            newDiv("Ken", "animeKen3");
            iKen++;
            setTimeout(removeDivKen2, 249);
            setTimeout(positionBaseKen, 250);
            actionKen = 'droiteSolKen';
            socket.emit('action_Ken', actionKen);
            //récupère la div de Ken
            var divKen = document.getElementsByClassName('Ken');
            
            //on modifie le style "margin-left" de la div pour faire le déplacement
            if (marginLeftKen < 440){// délimite le bord droit de la zone de jeu
                var pxKen = 40+marginLeftKen;
                if (pxKen > 470) {
                    var pxKen = pxKen-13;
                }
            }
            else {
                var pxKen = marginLeftKen;
            }   
            for (var zKen=0; zKen<divKen.length; zKen++) {          
                divKen[zKen].style.marginLeft = pxKen+"px";             
            };
            marginLeftKen = pxKen;
       }
       else {
            for(var xKen=1; xKen<=iKen; xKen++){
                deleteDiv("animeKen1"); 
            };
       }   
}

//**********Déplacement gauche au sol Ken**********
function removeDivKen3(){
   deleteDiv("animeKen3"); 
}

function gaucheSolKen(){   
       if (iKen == 0){
            deleteDiv("animeKen1"); 
            newDiv("Ken", "animeKen3");
            iKen++;
            setTimeout(removeDivKen3, 249);
            setTimeout(positionBaseKen, 250);
            actionKen = 'gaucheSolKen';
            socket.emit('action_Ken', actionKen);
            //récupère la div de Ken
            var divKen = document.getElementsByClassName('Ken');
            
            //on modifie le style "margin-left" de la div pour faire le déplacement
            if (marginLeftKen > -45){// délimite le bord gauche de la zone de jeu
                var pxKen = marginLeftKen-40;
                if (pxKen < -20) {
                    var pxKen = pxKen+13;
                }
            }
            else {
                var pxKen = marginLeftKen;
            }
            for (var zKen=0; zKen<divKen.length; zKen++) {          
                divKen[zKen].style.marginLeft = pxKen+"px";             
            };
            marginLeftKen = pxKen;
       }
       else {
            for(var xKen=1; xKen<=iKen; xKen++){
                deleteDiv("animeKen1");
            };
       }   
}

//**********position accroupi de Ken**********
/*la position accroupi évite les coups de point et les coup de pied,
donc il n'y aura aucun dégats, mais il est voulu que la position 
accroupi ne puisse pas etre appuyé à plusieurs reprise rapide,
sinon le perso pourais ne jamais subir de dégat*/

function removeDivKen4(){
   deleteDiv("animeKen4"); 
}

var accroupKen = false;

function valAccroupiKen(){
    accroupKen = false;
}

function accroupiKen(){   
       if (iKen == 0){
            deleteDiv("animeKen1");
            newDiv("Ken", "animeKen4");
            iKen++;
            setTimeout(removeDivKen4, 249);
            setTimeout(positionBaseKen, 250);
            actionKen = 'accroupiKen';
            socket.emit('action_Ken', actionKen);

            var pxKen = marginLeftKen;
            var divKen = document.getElementsByClassName('Ken');
            for (var zKen=0 ; zKen<divKen.length ; zKen++) {          
                divKen[zKen].style.marginLeft = pxKen+"px";             
            };
       }
       else {
            for(var xKen=1; xKen<=iKen; xKen++){
                deleteDiv("animeKen1");
            };
       }   
}

//**********Coup de pied de Ken**********
function removeDivKen5(){
   deleteDiv("animeKen5");
}

function coupPiedKen(){   
       if (iKen == 0){
            deleteDiv("animeKen1");
            newDiv("Ken", "animeKen5");
            iKen++;
            setTimeout(removeDivKen5, 349);
            setTimeout(positionBaseKen, 350);
            actionKen = 'coupPiedKen';
            socket.emit('action_Ken', actionKen);

            var pxKen = marginLeftKen;
            var divKen = document.getElementsByClassName('Ken');
            for (var zKen=0 ; zKen<divKen.length ; zKen++) {          
                divKen[zKen].style.marginLeft = pxKen+"px";             
            };

       }
       else {
            for(var xKen=1; xKen<=iKen; xKen++){
                deleteDiv("animeKen1");
            };
       }   
}

//**********Super coup Ken**********
function removeDivKen6(){
   deleteDiv("animeKen6");
}

var superCoupKen1 = 0;
function animeKen7(){           
    //on modifie le style "margin-left" de la div pour faire le déplacement
        if (superCoupKen1 == false) {          
            if (marginLeftKen < 330){// délimite le bord droit de la zone de jeu
                newDiv("superCoupKen", "animeKen7");
                var pxKen = 150+marginLeftKen;
            }
        }
        else if (superCoupKen1 == true) {
            deleteDiv("animeKen7");
            newDiv("superCoupKen", "animeKen7");
            if (marginLeftKen < 330) {
                if (maginLeftSuperCoupKen < 440){// délimite le bord droit de la zone de jeu
                    var pxKen = 40+maginLeftSuperCoupKen;
                    if (pxKen > 470) {
                        var pxKen = pxKen-13;
                    }
                }
                else {
                    var pxKen = maginLeftSuperCoupKen;
                }
            }
            else{
                deleteDiv("animeKen7");
            }
        }

        //récupère la div de Ken
        var divKen = document.getElementsByClassName('superCoupKen');
        for (var zKen=0; zKen<divKen.length; zKen++) {          
            divKen[zKen].style.marginLeft = pxKen+"px";             
        };

        maginLeftSuperCoupKen = pxKen;
        superCoupKen1 = true;
}

function superCoupFinKen(){
    superCoupKen1 = 0;
    deleteDiv("animeKen7");
}

function animeKen72(){
    setTimeout(animeKen7, 450);
    setTimeout(animeKen7, 550);
    setTimeout(animeKen7, 650);
    setTimeout(animeKen7, 750);
    setTimeout(animeKen7, 850);
    setTimeout(animeKen7, 950);
    setTimeout(superCoupFinKen, 1050);
}

function superCoupKen(){   
       if (iKen == 0){
            deleteDiv("animeKen1");
            newDiv("Ken", "animeKen6");
            animeKen72();
            iKen++;
            setTimeout(removeDivKen6, 499);
            setTimeout(positionBaseKen, 500);
            actionKen = 'superCoupKen';
            socket.emit('action_Ken', actionKen);

            var pxKen = marginLeftKen;
            var divKen = document.getElementsByClassName('Ken');
            for (var zKen=0 ; zKen<divKen.length ; zKen++) {          
                divKen[zKen].style.marginLeft = pxKen+"px";             
            };

       }
       else {
            for(var xKen=1; xKen<=iKen; xKen++){
                deleteDiv("animeKen1");
            };
       }   
}

//**********position defense de Ken**********
/*la position défense réduit les dégats des coups de point et coups de pied
 et peux etre appuyé à plusieurs reprise rapide*/

function removeDivKen7(){
   deleteDiv("animeKen8");
}

function defenseKen(){   
       if (iKen == 0){
            deleteDiv("animeKen1");
            newDiv("Ken", "animeKen8");
            iKen++;
            setTimeout(removeDivKen7, 249);
            setTimeout(positionBaseKen, 250);
            actionKen = 'defenseKen';
            socket.emit('action_Ken', actionKen);

            var pxKen = marginLeftKen;
            var divKen = document.getElementsByClassName('Ken');
            for (var zKen=0 ; zKen<divKen.length ; zKen++) {          
                divKen[zKen].style.marginLeft = pxKen+"px";             
            };
       }
       else {
            for(var xKen=1; xKen<=iKen; xKen++){
                deleteDiv("animeKen1");
            };
       }   
}

//**********Saut Ken**********

var iKen = 0;
var toucheKen = 0;
var ancienneToucheKen = 0;
var sautAvantKen = false;
var toucheAvantKen = 0;

function removeDivKen8(){
   deleteDiv("animeKen9");
}

function toucheSautKen(touche){    

    //saut sur place
    if (toucheKen == 38) { // 38 est la touche "fleche haut"
        if (username == listJoueur[0]) {
            ancienneToucheKen = toucheKen;
            var infoSautAvantKen = false;
            sautAvantKen = false;
            sautKen(infoSautAvantKen);
        }
    }
    //saut en avant
    else if (ancienneToucheKen == 38 && toucheKen == 39) { //38 + 39 sont les touche "fleche haut" + "->"       
        if (username == listJoueur[0]) {
            infoSautAvantKen = true;
            sautAvantKen = true;
            sautKen(infoSautAvantKen);
        }
    }
}

var px1Ken;
var pourcentKen;
function decalageSautKen() {
    if (sautAvantKen == true) {
        if (marginLeftKen < 440){// délimite le bord droit de la zone de jeu
            px1Ken = 40+marginLeftKen;
            if (px1Ken > 470) {
                px1Ken = px1Ken-13;
            }
        }
        else {
            px1Ken = marginLeftKen;
        } 
        marginLeftKen = px1Ken;         
    }         
}

var wKen = 0;
function animeKen9(){
    if(wKen == 0) { decalageSautKen(); pourcentKen = 20;}
    else if(wKen == 1) { decalageSautKen();  pourcentKen= 10; }
    else if(wKen == 2) { decalageSautKen();  pourcentKen = 1;  }
    else if(wKen == 3) { decalageSautKen();  pourcentKen = 10; }
    else if(wKen == 4) { decalageSautKen();  pourcentKen = 20; }

    var divKen = document.getElementsByClassName('Ken');
    for (var zKen=0; zKen<divKen.length; zKen++) {          
        divKen[zKen].style.marginTop = pourcentKen+"%";
        if (sautAvantKen == true) {
            divKen[zKen].style.marginLeft = px1Ken+"px";
        }                  
    };

    wKen++
}
function sautFinKen(){
    wKen = 0;
    sautAvantKen = false;
    ancienneToucheKen = 0;
}

function animeKen92(){
    setTimeout(animeKen9, 150);
    setTimeout(animeKen9, 300);
    setTimeout(animeKen9, 450);
    setTimeout(animeKen9, 600);
    setTimeout(animeKen9, 750);
    setTimeout(sautFinKen, 751);
}


function sautKen(infoSautAvantKen){ 
        if (infoSautAvantKen == true) {       
            actionKen = 'sautAvantKen';
        }
        else if (infoSautAvantKen == false){
            actionKen = 'sautNormalKen';
        }
        socket.emit('action_Ken', actionKen);
       if (iKen == 0){
            deleteDiv("animeKen1");
            newDiv("Ken", "animeKen9");
            iKen++;
            setTimeout(removeDivKen8, 999);
            setTimeout(positionBaseKen, 1000);
            //récupère la div de Ken
            var divKen = document.getElementsByClassName('Ken');
            //on modifie le style "margin-left" de la div pour faire le déplacement
            var pxKen = marginLeftKen;
            for (var zKen=0; zKen<divKen.length; zKen++) {           
                divKen[zKen].style.marginLeft = pxKen+"px";            
            };
            animeKen92();
       }
       else {
            for(var xKen=1; xKen<=iKen; xKen++){
                deleteDiv("animeKen1");
            };
       }       
}

//**********position de dégats de Ken (POUR TEST)**********
function removeDivKen9(){
   deleteDiv("animeKen10");
}

function degatKen(){   
       if (iKen == 0){
            deleteDiv("animeKen1");
            newDiv("Ken", "animeKen10");
            iKen++;
            setTimeout(removeDivKen9, 249);
            setTimeout(positionBaseKen, 250);
            actionKen = 'degatKen';
            socket.emit('action_Ken', actionKen);

            var pxKen = marginLeftKen;
            var divKen = document.getElementsByClassName('Ken');
            for (var zKen=0 ; zKen<divKen.length ; zKen++) {          
                divKen[zKen].style.marginLeft = pxKen+"px";             
            };
       }
       else {
            for(var xKen=1; xKen<=iKen; xKen++){
                deleteDiv("animeKen1");
            };
       }   
}
