/* --- VARIABLES --- */

let checkForm //variables qui stockera si oui ou non le formulaire est complété

//Initialisation des totaux
let total_calories=0
let total_lipides=0
let total_glucides=0
let total_proteines=0

//Déclaration des objets qui stockent les valeurs de chaque option //j'ai changé ici les valeurs de matin
let dataMapping = {
    matin: {
        "option1": {
            calories: "254",
            lipides: "15",
            glucides: "20",
            proteines: "12"
        },
        "option2": {
            calories: "396",
            lipides: "15",
            glucides: "54",
            proteines: "9"
        },
        "option3": {
            calories: "247",
            lipides: "12",
            glucides: "31",
            proteines: "5"
        },
        "option4": {
            calories: "894",
            lipides: "31",
            glucides: "147",
            proteines: "9"
        }
    },
    midi: {
        "option5": {
            calories: "456",
            lipides: "12",
            glucides: "61",
            proteines: "27"
        },
        "option6": {
            calories: "862",
            lipides: "48",
            glucides: "37",
            proteines: "52"
        },
        "option7": {
            calories: "894",
            lipides: "31",
            glucides: "146",
            proteines: "9"
        },
        "option8": {
            calories: "547",
            lipides: "39",
            glucides: "28",
            proteines: "29"
        }
    },
    soir: {
        "option9": {
            calories: "727",
            lipides: "83",
            glucides: "35",
            proteines: "20"
        },
        "option10": {
            calories: "813",
            lipides: "49",
            glucides: "60",
            proteines: "29"
        },
        "option11": {
            calories: "361",
            lipides: "9",
            glucides: "55",
            proteines: "10"
        },
        "option12": {
            calories: "588",
            lipides: "19",
            glucides: "46",
            proteines: "27"
        }
    }
};



/* --- FONCTIONS --- */



/* Fonctions de calculs des totaux */
//Elles calculent les totaux en fonction des choix de lutilisateur et vérifient si le formulaire est complété
function valeur_matin() {
    let select = document.getElementById("matin"); //récupères le contenu de l'id
    let choice = select.selectedIndex; //récupère l'index de l'option choisi
    let valeur = select.options[choice].value; //récupère la valeur de celui-ci
    let data = dataMapping.matin[valeur]; //récupère l'objet correspondant
    //stock les valeurs des objets correspondants à celui selectionné
    total_calories += parseFloat(data.calories);
    total_lipides += parseFloat(data.lipides);
    total_glucides += parseFloat(data.glucides);
    total_proteines += parseFloat(data.proteines);
    //vérifie si les autres champs sont sélectionné ou non
    if (document.getElementById("midi").selectedIndex != 0 && document.getElementById("soir").selectedIndex != 0) {    
        document.getElementById("valider").removeAttribute("disabled");
        checkForm=true;
}}
function valeur_midi() {
    let select = document.getElementById("midi"); //récupères le contenu de l'id
    let choice = select.selectedIndex; //récupère l'index de l'option choisi
    let valeur = select.options[choice].value; //récupère la valeur de celui-ci
    let data = dataMapping.midi[valeur]; //récupère l'objet correspondant
    //stock les valeurs des objets correspondants à celui selectionné
    total_calories += parseFloat(data.calories);
    total_lipides += parseFloat(data.lipides);
    total_glucides += parseFloat(data.glucides);
    total_proteines += parseFloat(data.proteines);
    //vérifie si les autres champs sont sélectionné ou non
    if (document.getElementById("matin").selectedIndex != 0 && document.getElementById("soir").selectedIndex != 0) {    
        document.getElementById("valider").removeAttribute("disabled");
        checkForm=true;
}}
function valeur_soir() {
    let select = document.getElementById("soir"); //récupères le contenu de l'id
    let choice = select.selectedIndex; //récupère l'index de l'option choisi
    let valeur = select.options[choice].value; //récupère la valeur de celui-ci
    let data = dataMapping.soir[valeur]; //récupère l'objet correspondant
    //stock les valeurs des objets correspondants à celui selectionné
    total_calories += parseFloat(data.calories);
    total_lipides += parseFloat(data.lipides);
    total_glucides += parseFloat(data.glucides);
    total_proteines += parseFloat(data.proteines);
    //vérifie si les autres champs sont sélectionné ou non
    if (document.getElementById("matin").selectedIndex != 0 && document.getElementById("midi").selectedIndex != 0) {    
        document.getElementById("valider").removeAttribute("disabled");
        checkForm=true;
}}

/* Fonctions au chargement de la page */
$(document).ready(function() {
    $( "#merci" ).hide(); //cache le message #merci
    $(".loading").hide(); //cache l'animation .loading
    $("#footer-git").hide(); //cache #footer-git
    $( "#footer-luc" ).hide();



    //Quand l'utilisateur clic sur le bouton #fermer, cache le #modal et lance l'animation .loading
    $( "#fermer" ).click(function() { 
        $( "#modal" ).hide( "slow" ); 
        $(".loading").show("slow");
        $( "#footer-luc" ).slideDown( 500);
        $( "#footer-luc" ).slideUp( 700 );
        $( "#footer-git" ).slideDown(2000);


    }); 
    //Quand l'utilisateur sur le bouton #valider, cache l'animation #loading montre le #resultat
    $( "#valider" ).click(function() { 
        $( "#resultat" ).show( "slow" );
        $( "#valider" ).hide( "slow" );
        $( "#loading" ).hide( "slow" );
        $( "select").attr("disabled", true);
    }); 

    //Quand l'utilisateur clic quelque part sur la page, si le formulaire est complété, montre le message #merci
    $("option").click(function() { 
        if (checkForm ===true){
            $("#merci").show("400");
            $("#valider").css("background", "white");
        }
    });

    //When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        $( "#modal" ).fadeOut( 400 );
        $( "#footer-luc" ).fadeOut( 200 );

    }
    }

    //when the user clicks on <span> (x), close the modal
    $( ".close" ).click(function() {
        $( "#modal" ).fadeOut( 400 );
        $( "#footer-luc" ).fadeOut( 200 );

    });   
    
    //Quand l'utilisateur se trouve sur le bouton #valider, si le formulaire est complété, anime le bouton #fermer et envoie les les valeurs totales dans le #resultat
    $("#valider").hover(function(){
        if (checkForm===true){
            $(this).css("background-color", "black");
            $(this).css("color", "white");
            document.getElementById('cal').innerHTML = total_calories;
            document.getElementById('lip').innerHTML = total_lipides;
            document.getElementById('glu').innerHTML = total_glucides;
            document.getElementById('pro').innerHTML = total_proteines;
            if (2100 > total_calories > 2500 && 73 > total_lipides > 83 && 285 > total_glucides > 296 && 112 > total_proteines > 122) {
                document.getElementById('txt-res').innerHTML = 'Vous semblez manger équilibré';
                document.getElementById('rouge').style.display = "none";
                document.getElementById('resultat').style.backgroundColor = "#145a32";
            } else {
                document.getElementById('txt-res').innerHTML = 'Vous ne semblez pas manger équilibré';
                document.getElementById('vert').style.display = "none";
                document.getElementById('resultat').style.backgroundColor = "#641e16";
            }
        }}, function(){
            if (checkForm===true){
            $(this).css("background", "white");
            $(this).css("color", "black");
      }});
    
        
});

