let matin
let midi
let soir
let total

function hide()
{
document.getElementById('to_hide').style.display = 'none';
}

function valeur_matin() {
    select = document.getElementById("matin");
    choice = select.selectedIndex;
    valeur = select.options[choice].value;
    document.getElementById('id_matin').value = valeur;

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
    alert("Votre score est de "+total+" points !")
    console.log("Ça va aller, merci.") 
}



