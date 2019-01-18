/* --- VARIABLES --- */
let checkForm
//Déclaraction des variables totals
let total_calories=0
let total_lipides=0
let total_glucides=0
let total_proteines=0
//Déclaration du dataMapping
let dataMapping = {
    matin: {
        "option1": {
            calories: "250",
            lipides: "20",
            glucides: "14",
            proteines: "33"
        },
        "option2": {
            calories: "800",
            lipides: "20",
            glucides: "14",
            proteines: "33"
        },
        "option3": {
            calories: "280",
            lipides: "20",
            glucides: "14",
            proteines: "33"
        },
        "option4": {
            calories: "555",
            lipides: "20",
            glucides: "14",
            proteines: "33"
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
            proteines: "33"
        }
    }
};



/* --- FONCTIONS --- */
    
function valeur_matin() {
    let select = document.getElementById("matin");
    let choice = select.selectedIndex;
    let valeur = select.options[choice].value;
    let data = dataMapping.matin[valeur];
    total_calories += parseFloat(data.calories);
    total_lipides += parseFloat(data.lipides);
    total_glucides += parseFloat(data.glucides);
    total_proteines += parseFloat(data.proteines);
    if (document.getElementById("midi").selectedIndex != 0 && document.getElementById("soir").selectedIndex != 0) {    
        document.getElementById("button1").removeAttribute("disabled");
        checkForm=true;
        console.log("Formulaire completé");

    } else {
        console.log("Formulaire incomplé");
    } 
}


function valeur_midi() {
    let select = document.getElementById("midi");
    let choice = select.selectedIndex;
    let valeur = select.options[choice].value;
    let data = dataMapping.midi[valeur];
    total_calories += parseFloat(data.calories);
    total_lipides += parseFloat(data.lipides);
    total_glucides += parseFloat(data.glucides);
    total_proteines += parseFloat(data.proteines);
    if (document.getElementById("matin").selectedIndex != 0 && document.getElementById("soir").selectedIndex != 0) {    
        document.getElementById("button1").removeAttribute("disabled");
        checkForm=true;
        console.log("Formulaire completé");
    } else {
        console.log("Formulaire incomplé")
    } 
}

function valeur_soir() {
    let select = document.getElementById("soir");
    let choice = select.selectedIndex;
    let valeur = select.options[choice].value;
    let data = dataMapping.soir[valeur];
    total_calories += parseFloat(data.calories);
    total_lipides += parseFloat(data.lipides);
    total_glucides += parseFloat(data.glucides);
    total_proteines += parseFloat(data.proteines);
    document.getElementById('cal').innerHTML = total_calories;
    document.getElementById('lip').innerHTML = total_lipides;
    document.getElementById('glu').innerHTML = total_glucides;
    document.getElementById('pro').innerHTML = total_proteines;
    if (document.getElementById("matin").selectedIndex != 0 && document.getElementById("midi").selectedIndex != 0) {    
        document.getElementById("button1").removeAttribute("disabled");
        checkForm=true;
        console.log("Formulaire completé");
    } else {
        console.log("Formulaire incomplé");
    } 

}



$(document).ready(function() {$
    $( ".modal" ).fadeOut( 1 );
    $( "#button0" ).click(function() {
        $( "#description" ).hide( "slow" );
    }); 
    $( "#button1" ).click(function() {
        $( "#block3" ).show( "slow" );
        $( "#button1" ).hide( "slow" );
        $( "#loading" ).hide( "slow" );
    }); 

    // When the user clicks on <span> (x), close the modal
    //$( ".close" ).click(function() {
     //   $( ".modal" ).fadeOut( 400 );
    //});   
    $("#button1").hover(function(){
        if (checkForm===true){
        $(this).css("background", "black");
        $(this).css("color", "white");

        }}, function(){
        $(this).css("background", "white");
        $(this).css("color", "black");
      });
    
        
});

