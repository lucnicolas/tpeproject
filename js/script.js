/* --- VARIABLES --- */
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
    select = document.getElementById("matin");
    choice = select.selectedIndex;
    valeur = select.options[choice].value;
    let data = dataMapping.matin[select.options[choice].value];
    total_calories += parseFloat(data.calories);
    total_lipides += parseFloat(data.lipides);
    total_glucides += parseFloat(data.glucides);
    total_proteines += parseFloat(data.proteines);
}


function valeur_midi() {
    select = document.getElementById("midi");
    choice = select.selectedIndex;
    valeur = select.options[choice].value;
    let data = dataMapping.midi[select.options[choice].value];
    total_calories += parseFloat(data.calories);
    total_lipides += parseFloat(data.lipides);
    total_glucides += parseFloat(data.glucides);
    total_proteines += parseFloat(data.proteines);
}


function valeur_soir() {
    select = document.getElementById("soir");
    choice = select.selectedIndex;
    valeur = select.options[choice].value;
    let data = dataMapping.soir[select.options[choice].value];
    total_calories += parseFloat(data.calories);
    total_lipides += parseFloat(data.lipides);
    total_glucides += parseFloat(data.glucides);
    total_proteines += parseFloat(data.proteines);
    document.getElementById('cal').innerHTML = total_calories;
    document.getElementById('lip').innerHTML = total_lipides;
    document.getElementById('glu').innerHTML = total_glucides;
    document.getElementById('pro').innerHTML = total_proteines;
}


$(document).ready(function() {

    $( "#button1" ).click(function() {
        $( "#block3" ).show( "slow" );
        $( "#button1" ).hide( "slow" );
        $( "#loading" ).hide( "slow" );

    });
        
});

