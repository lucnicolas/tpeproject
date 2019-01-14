//en sois on a pas besoin de javascript psk on l'avais pris pour avoir un score mais,
//mais en sois le plus important c'est d'avoir un recap des valeurs nutritionelles en fonction du menu choisi




//Valeur théorique pour un homme actif agé entre 18 et 40 ans.

//Calories de base = 2650 kcal/jour.
let theoCalories=2650;
//Lipides entre 35% et 40% des calories
//Lipides = 2650*0.375
let theoLipides=theoCalories*0.375
//Glucides entre 40% et 55% des calories.
//Glucides = 2650*0.475
let theoGlucides=theoCalories*0.475
//Protéines entre 15 et 29% des calories.
//Protéines = 2650*0.22
let theoProtenies=theoCalories*0.22
//Sel ????
let theoSel=1

//Définition des variables.
let calories=0
let lipides=0
let glucides=0
let proteines=0
let sel=0

//Boîtes de dialogues champs de saisis.
let pdej=prompt("Quel est votre menu au petit dej?");
let dej=prompt("Quel est votre menu au dej?");
let diner=prompt("Quel est votre menu au diner?");

//Fonctions qui en fonction du cas selectionne ajoute les valeurs énérgétiques aux variables.
switch (pdej) {
  case "1":
    calories=calories+1000;
    lipides=lipides+1000;
    glucides=glucides+1000;
    proteines=proteines+1000;
    sel=sel+1;
    break;
  case "2":
    calories=calories+1000;
    lipides=lipides+1000;
    glucides=glucides+1000;
    proteines=proteines+1000;
    sel=sel+1000;
    break;
  case "3":
    calories=calories+1000;
    lipides=lipides+1000;
    glucides=glucides+1000;
    proteines=proteines+1000;
    sel=sel+1;
    break;
  case "4":
    calories=calories+1000;
    lipides=lipides+1000;
    glucides=glucides+1000;
    proteines=proteines+1000;
    sel=sel+1;
    break;
  default:
    console.log("Erreur de saisie");
}

switch (dej) {
    case "1":
      calories=calories+1000;
      lipides=lipides+1000;
      glucides=glucides+1000;
      proteines=proteines+1000;
      sel=sel+1;
      break;
    case "2":
      calories=calories+1000;
      lipides=lipides+1000;
      glucides=glucides+1000;
      proteines=proteines+1000;
      sel=sel+1;
      break;
    case "3":
      calories=calories+1000;
      lipides=lipides+1000;
      glucides=glucides+1000;
      proteines=proteines+1000;
      sel=sel+1;
      break;
    case "4":
      calories=calories+1000;
      lipides=lipides+1000;
      glucides=glucides+1000;
      proteines=proteines+1000;
      sel=sel+1;
      break;
    default:
      console.log("Erreur de saisie");
  }

  switch (diner) {
    case "1":
      calories=calories+1000;
      lipides=lipides+1000;
      glucides=glucides+1000;
      proteines=proteines+1000;
      sel=sel+1;
      break;
    case "2":
      calories=calories+1000;
      lipides=lipides+1000;
      glucides=glucides+1000;
      proteines=proteines+1000;
      sel=sel+1;
      break;
    case "3":
      calories=calories+1000;
      lipides=lipides+1000;
      glucides=glucides+1000;
      proteines=proteines+1000;
      sel=sel+1;
      break;
    case "4":
      calories=calories+1000;
      lipides=lipides+1000;
      glucides=glucides+1000;
      proteines=proteines+1000;
      sel=sel+1;
      break;
    default:
      console.log("Erreur de saisie");
  }

console.log("calories = ",calories);
console.log("lipides = ",lipides);
console.log("glucides = ",glucides);
console.log("protéines = ",proteines);
console.log("sel = ",sel);

let scoreCalories=calories*100/theoCalories;
let scoreLipides=lipides*100/theoLipides;
let scoreGlucides=glucides*100/theoGlucides;
let scoreProteines=proteines*100/theoProtenies;
let scoreSel=sel*100/theoSel;

let scoreFinal = scoreCalories+scoreGlucides+scoreLipides+scoreProteines+scoreSel

console.log(scoreFinal);

alert("Votre score est de " + scoreFinal);