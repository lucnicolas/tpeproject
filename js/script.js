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
            glucides: "19,7",
            proteines: "12,5"
        },
        "option2": {
            calories: "396",
            lipides: "15,5",
            glucides: "54,3",
            proteines: "8,6"
        },
        "option3": {
            calories: "247",
            lipides: "11,8",
            glucides: "30,6",
            proteines: "4,6"
        },
        "option4": {
            calories: "894",
            lipides: "31",
            glucides: "146,6",
            proteines: "31"
        }
    },
    midi: {
        "option5": {
            calories: "332",
            lipides: "20",
            glucides: "14",
            proteines: "33"
        },
        "option6": {
            calories: "101",
            lipides: "20",
            glucides: "14",
            proteines: "33"
        },
        "option7": {
            calories: "902",
            lipides: "20",
            glucides: "14",
            proteines: "33"
        },
        "option8": {
            calories: "654",
            lipides: "20",
            glucides: "14",
            proteines: "33"
        }
    },
    soir: {
        "option9": {
            calories: "403",
            lipides: "20",
            glucides: "14",
            proteines: "33"
        },
        "option10": {
            calories: "298",
            lipides: "20",
            glucides: "14",
            proteines: "33"
        },
        "option11": {
            calories: "330",
            lipides: "20",
            glucides: "14",
            proteines: "33"
        },
        "option12": {
            calories: "509",
            lipides: "20",
            glucides: "14",
            proteines: "-100"
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

    //Quand l'utilisateur clic sur le bouton #fermer, cache le #modal et lance l'animation .loading
    $( "#fermer" ).click(function() { 
        $( "#modal" ).hide( "slow" ); 
        $(".loading").show("slow");

    }); 
    //Quand l'utilisateur sur le bouton #valider, cache l'animation #loading montre le #resultat
    $( "#valider" ).click(function() { 
        $( "#resultat" ).show( "slow" );
        $( "#valider" ).hide( "slow" );
        $( "#loading" ).hide( "slow" );
    }); 

    //Quand l'utilisateur clic quelque part sur la page, si le formulaire est complété, montre le message #merci
    $(document).click(function() { 
        if (checkForm ===true){
            $("#merci").show("400");
        }
    });

    //When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = "none";
    }
    }

    //when the user clicks on <span> (x), close the modal
    $( ".close" ).click(function() {
        $( "#modal" ).fadeOut( 400 );
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
            if (total_calories > 0 && total_lipides > 0 && total_glucides > 0 && total_proteines > 0) {
                document.getElementById('txt-res').innerHTML = "Vous semblez manger équilibré";
                document.getElementById('rouge').style.display = "none";
                document.getElementById('resultat').style.backgroundColor = "#145a32";
            } else {
                document.getElementById('txt-res').innerHTML = "Vous ne semblez pas manger équilibré";
                document.getElementById('vert').style.display = "none";
                document.getElementById('resultat').style.backgroundColor = "#641e16";


            
            }
        }}, function(){
            $(this).css("background", "white");
            $(this).css("color", "black");
      });
    
        
});

