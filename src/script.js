let matin
let midi
let soir
let total
let total_calories
let total_lipides
let total_glucides
let total_proteines
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

function hide()
{
document.getElementById('to_hide').style.display = 'none';
}

function valeur_matin() {
    select = document.getElementById("matin");
    choice = select.selectedIndex;
    valeur = select.options[choice].value;
    document.getElementById('id_matin').value = valeur;
    let data = dataMapping.matin[select.options[choice].value];
    for(let elm in data){
        console.log(data[elm]);
    }
    console.log(total_calories);
    console.log(data);
    matin = select.options[choice].value;
    matin = parseFloat(matin)
}

function valeur_midi() {
    select = document.getElementById("midi");
    choice = select.selectedIndex;
    valeur = select.options[choice].value;
    document.getElementById('id_midi').value = valeur;

    midi = select.options[choice].value;
    midi = parseFloat(midi)
}

function valeur_soir() {
    select = document.getElementById("soir");
    choice = select.selectedIndex;
    valeur = select.options[choice].value;
    document.getElementById('id_soir').value = valeur;

    soir = select.options[choice].value;
    soir = parseFloat(soir)
}

function calcul_total(){
    let total = matin+midi+soir
    alert("Votre score1 est de "+total+" points !")
    console.log("Ça va aller, merci.") 
}



