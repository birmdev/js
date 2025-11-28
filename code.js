console.log("Hello World 2");

var Hello = "Hello World";
console.log(Hello);

/*Recette pâte à crêpes pour 1 personne:
 * - 63g de farine
 * - 1 oeuf
 * - 0.2 L de lait
 * - 0.5 c à s de sucre
 * - 13g de beurre
 */

//Programme pour calculer les ingrédients pour X personnes

var farine = 63;
var oeufs = 1;
var lait = 0.2;
var sucre = 0.5;
var beurre = 13;

var nbPersonnesUtil = null;

// Récupérer le nombre saisi par l'util dans la page index
function GetPerson() {
  var nbPersonnesUtil = document.getElementById("nbPersonnes").value;
  var recette = `
  <p>Ingrédients pour ${nbPersonnesUtil} personnes:<br>
  - ${farine * nbPersonnesUtil} g de farine<br>
  - ${oeufs * nbPersonnesUtil} oeufs<br>
  - ${lait * nbPersonnesUtil} L de lait<br>
  - ${sucre * nbPersonnesUtil} g de sucre<br>
  - ${beurre * nbPersonnesUtil} g de beurre
  </p>
`;
  document.getElementById("result").innerHTML = recette;
}

/*let personnesUtil = prompt("Pour combien de personnes?");

var nbPersonnesUtil = Number(personnesUtil);
while (!Number.isInteger(nbPersonnesUtil)) {
    personnesUtil = prompt("Veuillez saisir un nombre entier");
    nbPersonnesUtil = Number(personnesUtil);
}*/

console.log("Ingrédients pour " + nbPersonnesUtil + " personnes:");
console.log("- " + farine * nbPersonnesUtil + " g de farine");
console.log("- " + oeufs * nbPersonnesUtil + " oeufs");
console.log("- " + lait * nbPersonnesUtil + " L de lait");
console.log("- " + sucre * nbPersonnesUtil + " g de sucre");
console.log("- " + beurre * nbPersonnesUtil + " g de beurre");

//Etablir la liste de courses à faire pour X personnes, en tenant compte des quantités vendues dans le commerce

console.log("Liste de courses pour " + nbPersonnesUtil + " personnes:");
console.log(
  "- " + Math.ceil((farine * nbPersonnesUtil) / 1000) + " paquet(s) de farine"
);
console.log("- " + Math.ceil((oeufs * nbPersonnesUtil) / 1) + " oeuf(s)");
console.log("- " + Math.ceil((lait * nbPersonnesUtil) / 1) + " L de lait");
console.log(
  "- " + Math.ceil((sucre * nbPersonnesUtil) / 1000) + " paquet(s) de sucre"
);
console.log(
  "- " + Math.ceil((beurre * nbPersonnesUtil) / 500) + " motte(s) de beurre"
);

//Afficher dans la console chiffres de 1 à 10 (i++ pour incrémentation)
for (let i = 1; i <= 11; i++) {
  console.log(i);
}
//Afficher dans la console chiffres de 10 à 1 dans l'ordre décroissant (i-- pour décrémentation)
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
//Afficher chaque fruit de ce tableau
const fruits = ["Pomme", "Banane", "Kiwi", "Fraise"];
for (let i = 0; i <= 3; i++) {
  console.log(fruits[i]);
}
//Afficher une pyramide de 5 lignes d'astérisques (*)
var nombre = 5;
for (let i = 1; i <= nombre; i++) {
  let ligne = "";
  for (let j = 0; j < i; j++) {
    ligne += "*";
  }
  console.log(ligne);
}
//Afficher une pyramide de 5 lignes d'astérisques (*) // Autre méthode
var nb = 5;
var nbligne = "";
for (let i = 1; i <= nb; i++) {
  nbligne += "*";
  console.log(nbligne);
}

/*Afficher une pyramide de X lignes d'astérisques (*) saisi par l'utilisateur
let pyrUtil = prompt("Saisir un chiffre");
let pyrNbUtil = Number(pyrUtil);

//Opérateur ET logique (&&) // Opérateur OU logique (||)
while (!Number.isInteger(pyrNbUtil) || pyrNbUtil < 0) {
  pyrUtil = prompt("Veuillez saisir un nombre entier");
  pyrNbUtil = Number(pyrUtil);
}
console.log("Nombre saisi : " + pyrNbUtil);

for (let i = 1; i <= pyrNbUtil; i++) {
  let ligne = "";
  for (let j = 0; j < i; j++) {
    ligne += "*";
  }
  console.log(ligne);
}
*/

/*Afficher chaque élément de la liste en utilisant la méthode forEach
const animaux = ["Chat", "Chien", "Lapin", "Tigre"];
animaux.forEach((item) => {
  console.log(item);
});
*/
//Afficher l'index + la valeur
const animaux = ["Chat", "Chien", "Lapin", "Tigre"];
animaux.forEach((item, index) => {
  console.log("Item = " + item + " / Index = " + index);
});

//Calculer la somme d'un tableau
const chiffres = [3, 8, 2, 11, 4];
var total = null;
chiffres.forEach((item) => {
  total += item;
});
console.log(total);

//Afficher les mots de plus de 4 lettres
const mots = ["soleil", "eau", "ordinateur", "stylo"];
mots.forEach((item) => {
  if (item.length > 4) {
    console.log(item);
  }
});

//L'utilisateur doit deviner le prix d'un produit qui sera généré aléatoirement.
//A chaque tentative, l'ordinateur doit préciser si le prix à deviner est supérieur ou inférieur en affichant "c'est plus" ou "c'est moins"

var mystere = Math.floor(Math.random() * 10);

console.log("Nombre aléatoire : " + mystere);

let mystUtil = prompt("Saisir un chiffre");
let mystNbUtil = Number(mystUtil);

while (!Number.isInteger(mystNbUtil) || mystNbUtil < 0) {
  mystUtil = prompt("Veuillez saisir un nombre entier");
  mystNbUtil = Number(mystUtil);
}
while (mystNbUtil != mystere) {
  if (mystNbUtil < mystere) {
    alert("C'est plus");
  } else {
    alert("C'est moins");
  }
  mystUtil = prompt("Veuillez saisir un nombre entier");
  mystNbUtil = Number(mystUtil);
}
console.log("Nombre saisi : " + mystNbUtil + " / Nb mystère : " + mystere);

//CAS PRATIQUE - La victoire par l'épée
//Créer un mini-jeu au tour par tour qui opposera 2 utilisateurs.
//Les joueurs ont un total de 10 PV.
//Les utilisateurs auront la possibilité de:
//- Attaquer à l'épée (-3 PV)
//- Attaquer à distance (-1 PV)
//- Contrer (si l'autre joueur attaque à l'épée, il perd 1 PV)
//- Boire une potion (+ 2 PV)
//Le premier combattant arrivant à 0 PV perd la partie.
//BONUS: Afficher un message à l'écran indiquant le joueur actif (J1 ou J2)
//BONUS+: Changer la couleur de l'écran lorsqu'un joueur perd
//BONUS++: Lancer une animation CSS lors des attaques à l'épée
//BONUS+++: Ajouter la saisie du nom des joueurs en début de partie + une animation pour toutes les actions + du son avec ces animations
