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
            calories: "10",
            lipides: "20",
            glucides: "14",
            proteines: "33"
        },
        "option2": {
            calories: "10",
            lipides: "20",
            glucides: "14",
            proteines: "33"
        },
        "option3": {
            calories: "10",
            lipides: "20",
            glucides: "14",
            proteines: "33"
        },
        "option4": {
            calories: "10",
            lipides: "20",
            glucides: "14",
            proteines: "33"
        }
    },
    midi: {
        "option5": {
            calories: "10",
            lipides: "20",
            glucides: "14",
            proteines: "33"
        },
        "option6": {
            calories: "10",
            lipides: "20",
            glucides: "14",
            proteines: "33"
        },
        "option7": {
            calories: "10",
            lipides: "20",
            glucides: "14",
            proteines: "33"
        },
        "option8": {
            calories: "10",
            lipides: "20",
            glucides: "14",
            proteines: "33"
        }
    },
    soir: {
        "option9": {
            calories: "10",
            lipides: "20",
            glucides: "14",
            proteines: "33"
        },
        "option10": {
            calories: "10",
            lipides: "20",
            glucides: "14",
            proteines: "33"
        },
        "option11": {
            calories: "10",
            lipides: "20",
            glucides: "14",
            proteines: "33"
        },
        "option12": {
            calories: "10",
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
    document.getElementById('id_matin').value = valeur;
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
    document.getElementById('id_midi').value = valeur;
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
    document.getElementById('id_soir').value = valeur;
    let data = dataMapping.soir[select.options[choice].value];
    total_calories += parseFloat(data.calories);
    total_lipides += parseFloat(data.lipides);
    total_glucides += parseFloat(data.glucides);
    total_proteines += parseFloat(data.proteines);
}


//Fenête d'alert avec les données totales
//TODO : mise en forme correcte ?
function calcul_total(){
    alert("Calories : "+total_calories+"\nLipides : "+total_lipides+"\nGlucides : "+total_glucides+"\nProteines : "+total_proteines);
    console.log("Merci d'avoir participé :)") 
}



