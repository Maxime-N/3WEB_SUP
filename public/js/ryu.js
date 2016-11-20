
var actionRyu;
var iRyu=0;

function positionBaseRyu(){   
    newDiv("Ryu", "animeRyu1");
    var pxRyu = marginLeftRyu;
    var divRyu = document.getElementsByClassName('Ryu');
    for (var zRyu=0 ; zRyu<divRyu.length ; zRyu++) {          
        divRyu[zRyu].style.marginLeft = pxRyu+"px";             
    };
    iRyu--;
}

//**********Coup de poing de Ryu**********
function removeDivRyu1(){
   deleteDiv("animeRyu2"); 
}

function punchRyu(){   
        /*la condition iRyu permet de ne pas doubler le personnage lorsque qu'il y a un 
        apuis multiple très rapide*/ 
       if (iRyu == 0){
            deleteDiv("animeRyu1");
            newDiv("Ryu", "animeRyu2");        
            iRyu++;
            setTimeout(removeDivRyu1, 249);
            setTimeout(positionBaseRyu, 250);
            actionRyu = 'punchRyu';
            socket.emit('action_Ryu', actionRyu);

            var pxRyu = marginLeftRyu;
            var divRyu = document.getElementsByClassName('Ryu');
            for (var zRyu=0 ; zRyu<divRyu.length ; zRyu++) {          
                divRyu[zRyu].style.marginLeft = pxRyu+"px";             
            };

       }
       else {
            for(var xRyu=1; xRyu<=iRyu; xRyu++){
                deleteDiv("animeRyu1");
            };
       }   
}

//**********Déplacement droite au sol Ryu**********
function removeDivRyu2(){
   deleteDiv("animeRyu3");
}

function droiteSolRyu(){   
       if (iRyu == 0){
            deleteDiv("animeRyu1");
            newDiv("Ryu", "animeRyu3");
            iRyu++;
            setTimeout(removeDivRyu2, 249);
            setTimeout(positionBaseRyu, 250);
            actionRyu = 'droiteSolRyu';
            socket.emit('action_Ryu', actionRyu);
            //récupère la div de Ryu
            var divRyu = document.getElementsByClassName('Ryu');
            
            //on modifie le style "margin-left" de la div pour faire le déplacement
            if (marginLeftRyu < 440){// délimite le bord droit de la zone de jeu
                var pxRyu = 40+marginLeftRyu;
                if (pxRyu > 470) {
                    var pxRyu = pxRyu-13;
                }
            }
            else {
                var pxRyu = marginLeftRyu;
            }   
            for (var zRyu=0; zRyu<divRyu.length; zRyu++) {          
                divRyu[zRyu].style.marginLeft = pxRyu+"px";             
            };
            marginLeftRyu = pxRyu;
       }
       else {
            for(var xRyu=1; xRyu<=iRyu; xRyu++){
                deleteDiv("animeRyu1");
            };
       }   
}

//**********Déplacement gauche au sol Ryu**********
function removeDivRyu3(){ 
   deleteDiv("animeRyu3");
}

function gaucheSolRyu(){   
       if (iRyu == 0){
            deleteDiv("animeRyu1");
            newDiv("Ryu", "animeRyu3");
            iRyu++;
            setTimeout(removeDivRyu3, 249);
            setTimeout(positionBaseRyu, 250);
            actionRyu = 'gaucheSolRyu';
            socket.emit('action_Ryu', actionRyu);
            //récupère la div de Ryu
            var divRyu = document.getElementsByClassName('Ryu');
            
            //on modifie le style "margin-left" de la div pour faire le déplacement
            if (marginLeftRyu > -45){// délimite le bord gauche de la zone de jeu
                var pxRyu = marginLeftRyu-40;
                if (pxRyu < -20) {
                    var pxRyu = pxRyu+13;
                }
            }
            else {
                var pxRyu = marginLeftRyu;
            }
            for (var zRyu=0; zRyu<divRyu.length; zRyu++) {          
                divRyu[zRyu].style.marginLeft = pxRyu+"px";             
            };
            marginLeftRyu = pxRyu;
       }
       else {
            for(var xRyu=1; xRyu<=iRyu; xRyu++){
                deleteDiv("animeRyu1");
            };
       }   
}

//**********position accroupi de Ryu**********
/*la position accroupi évite les coups de point et les coup de pied,
donc il n'y aura aucun dégats, mais il est voulu que la position 
accroupi ne puisse pas etre appuyé à plusieurs reprise rapide,
sinon le perso pourais ne jamais subir de dégat*/

function removeDivRyu4(){
   deleteDiv("animeRyu4"); 
}

var accroupRyu = false;

function valAccroupiRyu(){
    accroupRyu = false;
}

function accroupiRyu(){   
       if (iRyu == 0){
            deleteDiv("animeRyu1");
            newDiv("Ryu", "animeRyu4");
            iRyu++;
            setTimeout(removeDivRyu4, 249);
            setTimeout(positionBaseRyu, 250);
            actionRyu = 'accroupiRyu';
            socket.emit('action_Ryu', actionRyu);

            var pxRyu = marginLeftRyu;
            var divRyu = document.getElementsByClassName('Ryu');
            for (var zRyu=0 ; zRyu<divRyu.length ; zRyu++) {          
                divRyu[zRyu].style.marginLeft = pxRyu+"px";             
            };
       }
       else {
            for(var xRyu=1; xRyu<=iRyu; xRyu++){
                deleteDiv("animeRyu1");
            };
       }   
}

//**********Coup de pied de Ryu**********
function removeDivRyu5(){
   deleteDiv("animeRyu5");
}

function coupPiedRyu(){   
       if (iRyu == 0){
            deleteDiv("animeRyu1");
            newDiv("Ryu", "animeRyu5");
            iRyu++;
            setTimeout(removeDivRyu5, 349);
            setTimeout(positionBaseRyu, 350);
            actionRyu = 'coupPiedRyu';
            socket.emit('action_Ryu', actionRyu);

            var pxRyu = marginLeftRyu;
            var divRyu = document.getElementsByClassName('Ryu');
            for (var zRyu=0 ; zRyu<divRyu.length ; zRyu++) {          
                divRyu[zRyu].style.marginLeft = pxRyu+"px";             
            };

       }
       else {
            for(var xRyu=1; xRyu<=iRyu; xRyu++){
                deleteDiv("animeRyu1");
            };
       }   
}

//**********Super coup Ryu**********
function removeDivRyu6(){
   deleteDiv("animeRyu6");
}

var superCoupRyu1 = 0;
function animeRyu7(){           
    //on modifie le style "margin-left" de la div pour faire le déplacement
        if (superCoupRyu1 == false) {          
            if (marginLeftRyu > 65){// délimite le bord gauche de la zone de jeu
                newDiv("superCoupRyu", "animeRyu7");
                var pxRyu = marginLeftRyu-150;
            }
        }
        else if (superCoupRyu1 == true) {
            deleteDiv("animeRyu7");
            newDiv("superCoupRyu", "animeRyu7");
            if (marginLeftRyu > 65) {
                if (maginLeftSuperCoupRyu > -45){// délimite le bord gauche de la zone de jeu
                    var pxRyu = maginLeftSuperCoupRyu-40;
                    if (pxRyu < -20) {
                        var pxRyu = pxRyu-13;
                    }
                }
                else {
                    var pxRyu = maginLeftSuperCoupRyu;
                }
            }
            else{
                deleteDiv("animeRyu7");
            }
        }

        //récupère la div de Ryu
        var divRyu = document.getElementsByClassName('superCoupRyu');
        for (var zRyu=0; zRyu<divRyu.length; zRyu++) {          
            divRyu[zRyu].style.marginLeft = pxRyu+"px";             
        };

        maginLeftSuperCoupRyu = pxRyu;
        superCoupRyu1 = true;
}

function superCoupFinRyu(){
    superCoupRyu1 = 0;
    deleteDiv("animeRyu7");
}

function animeRyu72(){
    setTimeout(animeRyu7, 450);
    setTimeout(animeRyu7, 550);
    setTimeout(animeRyu7, 650);
    setTimeout(animeRyu7, 750);
    setTimeout(animeRyu7, 850);
    setTimeout(animeRyu7, 950);
    setTimeout(superCoupFinRyu, 1050);
}

function superCoupRyu(){   
       if (iRyu == 0){
            deleteDiv("animeRyu1");
            newDiv("Ryu", "animeRyu6");
            animeRyu72();
            iRyu++;
            setTimeout(removeDivRyu6, 499);
            setTimeout(positionBaseRyu, 500);
            actionRyu = 'superCoupRyu';
            socket.emit('action_Ryu', actionRyu);

            var pxRyu = marginLeftRyu;
            var divRyu = document.getElementsByClassName('Ryu');
            for (var zRyu=0 ; zRyu<divRyu.length ; zRyu++) {          
                divRyu[zRyu].style.marginLeft = pxRyu+"px";             
            };

       }
       else {
            for(var xRyu=1; xRyu<=iRyu; xRyu++){
                deleteDiv("animeRyu1");
            };
       }   
}

//**********position defense de Ryu**********
/*la position défense réduit les dégats des coups de point et coups de pied
 et peux etre appuyé à plusieurs reprise rapide*/

function removeDivRyu7(){
   deleteDiv("animeRyu1");
}

function defenseRyu(){   
       if (iRyu == 0){
            deleteDiv("animeRyu1");
            newDiv("Ryu", "animeRyu8");
            iRyu++;
            setTimeout(removeDivRyu7, 249);
            setTimeout(positionBaseRyu, 250);
            actionRyu = 'defenseRyu';
            socket.emit('action_Ryu', actionRyu);

            var pxRyu = marginLeftRyu;
            var divRyu = document.getElementsByClassName('Ryu');
            for (var zRyu=0 ; zRyu<divRyu.length ; zRyu++) {          
                divRyu[zRyu].style.marginLeft = pxRyu+"px";             
            };
       }
       else {
            for(var xRyu=1; xRyu<=iRyu; xRyu++){
                deleteDiv("animeRyu1");
            };
       }   
}

//**********Saut Ryu**********

var iRyu = 0;
var toucheRyu = 0;
var ancienneToucheRyu = 0;
var sautAvantRyu = false;
var toucheAvantRyu = 0;

function removeDivRyu8(){
   deleteDiv("animeRyu9");
}

function toucheSautRyu(touche){    

    //saut sur place
    if (toucheRyu == 38) { // 38 est la touche "fleche haut"
        ancienneToucheRyu = toucheRyu;
        var infoSautAvantRyu = false;
        sautAvantRyu = false;
        sautRyu(infoSautAvantRyu);
    }
    //saut en avant
    else if (ancienneToucheRyu == 38 && toucheRyu == 37) { //38 + 37 sont les touche "fleche haut" + "<-"       
        infoSautAvantRyu = true;
        sautAvantRyu = true;
        sautRyu(infoSautAvantRyu);
    }
}

var px1Ryu;
var pourcentRyu;
function decalageSautRyu() {
    if (sautAvantRyu == true) {
        if (marginLeftRyu > -45){// délimite le bord gauche de la zone de jeu
            px1Ryu = marginLeftRyu-40;
            if (pxRyu < -20) {
                var pxRyu = pxRyu+13;
            }
        }
        else {
            px1Ryu = marginLeftRyu;
        } 
        marginLeftRyu = px1Ryu;         
    }         
}

var wRyu = 0;
function animeRyu9(){
    if(wRyu == 0) { decalageSautRyu(); pourcentRyu = 20;}
    else if(wRyu == 1) { decalageSautRyu();  pourcentRyu = 10; }
    else if(wRyu == 2) { decalageSautRyu();  pourcentRyu = 1;  }
    else if(wRyu == 3) { decalageSautRyu();  pourcentRyu = 10; }
    else if(wRyu == 4) { decalageSautRyu();  pourcentRyu = 20; }

    var divRyu = document.getElementsByClassName('Ryu');
    for (var zRyu=0; zRyu<divRyu.length; zRyu++) {          
        divRyu[zRyu].style.marginTop = pourcentRyu+"%";
        if (sautAvantRyu == true) {
            divRyu[zRyu].style.marginLeft = px1Ryu+"px";
        }                  
    };

    wRyu++
}
function sautFinRyu(){
    wRyu = 0;
    sautAvantRyu = false;
    ancienneToucheRyu = 0;
}

function animeRyu92(){
    setTimeout(animeRyu9, 150);
    setTimeout(animeRyu9, 300);
    setTimeout(animeRyu9, 450);
    setTimeout(animeRyu9, 600);
    setTimeout(animeRyu9, 750);
    setTimeout(sautFinRyu, 751);
}


function sautRyu(infoSautAvantRyu){ 
        if (infoSautAvantRyu == true) {       
            actionRyu = 'sautAvantRyu';
        }
        else if (infoSautAvantRyu == false){
            actionRyu = 'sautNormalRyu';
        }
        socket.emit('action_Ryu', actionRyu);
       if (iRyu == 0){
            deleteDiv("animeRyu1");
            newDiv("Ryu", "animeRyu9");
            iRyu++;
            setTimeout(removeDivRyu8, 999);
            setTimeout(positionBaseRyu, 1000);
            //récupère la div de Ryu
            var divRyu = document.getElementsByClassName('Ryu');
            //on modifie le style "margin-left" de la div pour faire le déplacement
            var pxRyu = marginLeftRyu;
            for (var zRyu=0; zRyu<divRyu.length; zRyu++) {           
                divRyu[zRyu].style.marginLeft = pxRyu+"px";            
            };
            animeRyu92();
       }
       else {
            for(var xRyu=1; xRyu<=iRyu; xRyu++){
                deleteDiv("animeRyu1");
            };
       }       
}

//**********position de dégats de Ryu (POUR TEST)**********
function removeDivRyu9(){
   deleteDiv("animeRyu10");
}

function degatRyu(){   
       if (iRyu == 0){
            deleteDiv("animeRyu1");
            newDiv("Ryu", "animeRyu10");
            iRyu++;
            setTimeout(removeDivRyu9, 249);
            setTimeout(positionBaseRyu, 250);
            actionRyu = 'degatRyu';
            socket.emit('action_Ryu', actionRyu);

            var pxRyu = marginLeftRyu;
            var divRyu = document.getElementsByClassName('Ryu');
            for (var zRyu=0 ; zRyu<divRyu.length ; zRyu++) {          
                divRyu[zRyu].style.marginLeft = pxRyu+"px";             
            };
       }
       else {
            for(var xRyu=1; xRyu<=iRyu; xRyu++){
                deleteDiv("animeRyu1");
            };
       }   
}