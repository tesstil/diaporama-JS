//  VARIABLES
// var taille_image = 750;
var taille_image = document.getElementById('slider_barre').offsetWidth;
var nombre_images = document.getElementById('barre').getElementsByTagName("li").length - 1;
// Image de départ
var image_en_cours = 0;
// Initialisation du verrou
var running_deplacement = false,
    running_diapo = false;
// Variables par défaut
var duree_totale = 1000;
var duree_diaporama = 3000;
var pas = 5;



// WINDOW EVENTS
window.addEventListener("load", function(){
    resize_body();
    affichage_btn();
    changement_btn();
    evt_keyboard();
});

window.addEventListener("resize", function(){
    resize_body();
});



// FONCIONS
// Affecte la hauteur de la fenêtre au body (afin de centrer verticalement le contenu)
function resize_body() {
    var h = window.innerHeight,
        body = document.getElementsByTagName("BODY")[0],
        h_main = document.getElementById('main').offsetHeight;

    if (h > h_main) {
        body.style.height = h + "px";
    }
}

// Affichage des boutons images et puces
function affichage_btn(){
    var src_img = document.getElementById("barre").getElementsByTagName("IMG"),
        title_img = document.getElementById("barre").getElementsByClassName("title_cam"),
        i=0,
        j=0;
    // Images
    while(i <= nombre_images){
        document.getElementById("div_btn_imgs").innerHTML += "<li class=''  onclick='deplacer("+i+")'><img src='"+src_img[i].src+"' alt='' id='btn_img"+i+"'><div>"+ title_img[i].innerHTML +"</div></li>";
        i++;
    }
    // Puces
    while(j <= nombre_images){
        document.getElementById("div_btn_puces").innerHTML += "<i class='material-icons' id='btn_puce"+j+"' onclick='deplacer("+j+")'>panorama_fish_eye</i>";
        j++;
    }
}

// Sélectionne l'image et la puce correspondant à l'image en cours
function changement_btn(){
    // Puces
    for (var i = 0; i <= nombre_images; i++){
        if(i == image_en_cours){
            document.getElementById('btn_puce'+i).innerHTML = "lens";
        }
        else{
            document.getElementById('btn_puce'+i).innerHTML = "panorama_fish_eye";
        }
    }

    // Images
    var li_btn_imgs = document.getElementById('div_btn_imgs').getElementsByTagName('LI');
    for (var j = 0; j <= nombre_images; j++){
        if(j == image_en_cours){
            li_btn_imgs[j].className = "li_actif";
        }
        else{
            li_btn_imgs[j].className = "";
        }
    }

}

// Active un événement à l'intéraction avec le clavier
function evt_keyboard() {
    document.addEventListener("keydown", function(event){
        var x = event.keyCode;
        // Touche "flèche du haut"/"flèche de gauche"
        if (x == 37 || x == 38) {
            image_precedente();
        }
        // Touche "flèche du bas"/"flèche de droite"
        if (x == 39 || x == 40) {
            image_suivante();
        }
         // Touche "espace"
        if (x === 32){
            if(running_diapo == false){
                play_diapo();
                running_diapo = true;

            } else{
                stop_diapo();
            }
        }
    })
}

// Initialisation du diaporama
function initialisation(duree_deplacement, duree_diapo, pas_en_pixels){
    duree_totale = duree_deplacement;
    duree_diaporama = duree_diapo;
    pas = pas_en_pixels;
}

// Déplacement de l'image
function deplacer(image_cible){

    if(!running_deplacement){
        if(image_cible != image_en_cours){

            running_deplacement = true;

            x_en_cours = image_en_cours * taille_image;
            x_cible = image_cible * taille_image;

            nb_pas = Math.abs((x_cible - x_en_cours) / pas);
            duree_pas = duree_totale /nb_pas;

            deplacement = setInterval(function (){

                if(x_cible > x_en_cours){
                    x_en_cours += pas;
                }

                if(x_cible < x_en_cours){
                    x_en_cours -= pas;
                }

                document.getElementById("barre").style.left = "-" + x_en_cours + "px";

                if (x_en_cours == x_cible){
                    clearInterval(deplacement)
                    running_deplacement = false;
                }

            }, duree_pas);

            image_en_cours = image_cible;

        }
    }

    changement_btn();

};

// Boutons acion_barre
var precedent = document.getElementById("precedent"),
    suivant = document.getElementById("suivant"),
    start = document.getElementById("start"),
    stop = document.getElementById("stop"),
    reload = document.getElementById("reload");

function image_precedente(){
    if(image_en_cours != 0){
        image_cible = image_en_cours - 1;
    } else {
        image_cible = nombre_images;
    }
    deplacer(image_cible);
}

function image_suivante(){
    if(image_en_cours != nombre_images){
        image_cible = image_en_cours + 1;
    } else {
        image_cible = 0;
    }
    deplacer(image_cible);
}

function play_diapo(){
    start.disabled = true;

    diaporama = setInterval(function (){
        image_cible = image_en_cours + 1;
        if (image_cible > nombre_images){
            image_cible = 0;
        }
        deplacer(image_cible);

    }, duree_diaporama);
}

function stop_diapo(){
    start.disabled = false;
    clearInterval(diaporama);
    running_diapo = false;
}

// Execution
precedent.addEventListener("click", function(){
    image_precedente();
});


suivant.addEventListener("click", function(){
    image_suivante();
});

start.addEventListener("click", function(){
    play_diapo();
});

stop.addEventListener("click", function(){
    stop_diapo();
});

reload.addEventListener("click", function(){
    window.location.reload();
});
