/* --- VARIABLES --- */

let checkForm //variables qui stockera si oui ou non le formulaire est complété
let checkCal
let checkLip
let checkGlu
let checkPro

//Initialisation des totaux
let total_calories=0
let total_lipides=0
let total_glucides=0
let total_proteines=0

//Déclaration des objets qui stockent les valeurs de chaque option //j'ai changé ici les valeurs de matin
let dataMapping = {
    matin: {
        "option1": {
            calories: "749",
            lipides: "31",
            glucides: "95",
            proteines: "26"
        },
        "option2": {
            calories: "757",
            lipides: "30",
            glucides: "93",
            proteines: "25"
        },
        "option3": {
            calories: "512",
            lipides: "22",
            glucides: "61",
            proteines: "22"
        },
        "option4": {
            calories: "846",
            lipides: "31",
            glucides: "105",
            proteines: "24"
        }
    },
    midi: {
        "option5": {
            calories: "775",
            lipides: "32",
            glucides: "90",
            proteines: "29"
        },
        "option6": {
            calories: "787",
            lipides: "34",
            glucides: "85",
            proteines: "31"
        },
        "option7": {
            calories: "812",
            lipides: "32",
            glucides: "99",
            proteines: "30"
        },
        "option8": {
            calories: "911",
            lipides: "36",
            glucides: "93",
            proteines: "34"
        }
    },
    soir: {
        "option9": {
            calories: "879",
            lipides: "31",
            glucides: "133",
            proteines: "29"
        },
        "option10": {
            calories: "934",
            lipides: "41",
            glucides: "123",
            proteines: "32"
        },
        "option11": {
            calories: "834",
            lipides: "31",
            glucides: "103",
            proteines: "28"
        },
        "option12": {
            calories: "989",
            lipides: "56",
            glucides: "115",
            proteines: "30"
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
        console.log(total_calories);
        console.log(total_lipides);
        console.log(total_glucides);
        console.log(total_proteines);
    }); 

    //
    $("option").click(function() { 
        if (checkForm ===true){
            $("#merci").show("400");
            $("#valider").css("background", "white");
        }
    });

    //
    $('.matin-opt').click(function(){
        $('.matin-opt').css("background", "white");
        $('#matin').hide(400);
        $('#matin').attr("disabled", true);
        $('#matin-msg').text($('#matin option:selected').text());
    });
    $('.midi-opt').click(function(){
        $('#midi').hide(400);
        $('#midi').attr("disabled", true);
        $('#midi-msg').text($('#midi option:selected').text());

    });
    $('.soir-opt').click(function(){
        $('#soir').hide(400);
        $('#soir').attr("disabled", true);
        $('#soir-msg').text($('#soir option:selected').text());

    });

    //When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        $( "#modal" ).fadeOut( 400 );
        $( "#footer-luc" ).fadeOut( 200 );
    }};

    //when the user clicks on <span> (x), close the modal
    $( ".close" ).click(function() {
        $( "#modal" ).fadeOut( 400 );
        $( "#footer-luc" ).fadeOut( 200 );

    });   
    
    //Quand l'utilisateur se trouve sur le bouton #valider, si le formulaire est complété, anime le bouton #fermer et envoie les les valeurs totales dans le #resultat
    $("#valider").hover(function(){
        if (checkForm){
            if (total_calories > 2180 && total_calories < 2480) {
                checkCal = true;
            } else {
                checkCal = false;
            }
            if (total_lipides > 80 && total_lipides < 110) {
                checkLip = true;
            } else {
                checkLip = false;
            }
            if (total_glucides > 242 && total_glucides < 301) {
                checkGlu = true;
            } else {
                checkGlu = false;
            }
            if (total_proteines > 65 && total_proteines < 122) {
                checkPro = true;
            } else {
                checkPro = false;
            };
            $(this).css("background-color", "black");
            $(this).css("color", "white");
            document.getElementById('cal').innerHTML = total_calories;
            document.getElementById('lip').innerHTML = total_lipides;
            document.getElementById('glu').innerHTML = total_glucides;
            document.getElementById('pro').innerHTML = total_proteines;
            if (checkCal) {
                document.getElementById('fa-Cal').innerHTML = '<i class="fas fa-check"></i>';
            } else {
                document.getElementById('fa-Cal').innerHTML = '<i class="fas fa-times"></i>';
            }
            if (checkLip) {
                document.getElementById('fa-Lip').innerHTML = '<i class="fas fa-check"></i>';
            } else {
                document.getElementById('fa-Lip').innerHTML = '<i class="fas fa-times"></i>';
            }
            if (checkGlu) {
                document.getElementById('fa-Glu').innerHTML = '<i class="fas fa-check"></i>';
            } else {
                document.getElementById('fa-Glu').innerHTML = '<i class="fas fa-times"></i>';
            }
            if (checkPro) {
                document.getElementById('fa-Pro').innerHTML = '<i class="fas fa-check"></i>';
            } else {
                document.getElementById('fa-Pro').innerHTML = '<i class="fas fa-times"></i>';
            }
            if (checkCal && checkLip && checkGlu && checkLip && checkPro) {
                document.getElementById('txt-res').innerHTML = 'Vous semblez manger équilibré';
                document.getElementById('rouge').style.display = "none";
                document.getElementById('resultat').style.backgroundColor = "#145a32";
            } else {
                document.getElementById('txt-res').innerHTML = 'Vous ne semblez pas manger équilibré';
                document.getElementById('vert').style.display = "none";
                document.getElementById('resultat').style.backgroundColor = "#641e16";
            } 


        }}, function(){
            if (checkForm){
            $(this).css("background", "white");
            $(this).css("color", "black");
      }});
    
});
