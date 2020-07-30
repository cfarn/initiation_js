// -- Déclarer un tableau INDEXÉ :
// a)
var monTableau = [];
console.log(monTableau)

// b)
var myArray = new Array;
console.log(myArray);
// myArray et monTableau sont des tableaux qui peuvent contenir plusieurs infos

// Affecter des valeurs au tableau, plusieurs méthodes :
// a)
var nosPrenoms = ["Christian", "Philippe", "Mamadou", "Zitouni", "Sébastien"];
console.log(nosPrenoms);
// b)
monTableau[0] = "Christian"; // l'élément 0 est toujours le 1er élément du tableau
monTableau[1] = "Mamadou";
monTableau[2] = "Philippe";
monTableau[3] = "Sébastien";
monTableau[4] = "Zitouni";
console.log(monTableau);

// -- Déclarer et affecter des valeurs à un objet

var Coordonnee = {
    prenom : "Hugo",
    nom : "LIEGARD",
    age : 82
};
//console.clear(); // permet d'effacer les lignes de debug qui précèdent le console.clear();
console.log(Coordonnee); // j'affiche toutes les infos de mon tableau
console.log(Coordonnee['prenom']); // j'affiche seulement le prenom
console.log(Coordonnee.nom); // j'affiche seulement le nom

// *--on va créer 2 tableaux indexés

var listeDePrenom = ["Ousmane", "Cherif", "Hugo"];
var listeNom = ["Mama", "Benallal", "Liegard"];
var Annuaire = [listeDePrenom, listeNom];
console.log(Annuaire);
document.write(); // fonction native de JS qui permet d'inscrire le résultat directement sur la page html et non plus sur la console

document.write(Annuaire[0][1] + " " + Annuaire[1][0]);
Annuaire[1][2];
document.write("<hr>");
document.write(Annuaire[0][0]);
document.write(" ");
document.write(Annuaire[1][1]);

// tableau à 2 dimensions non indexé

var contact = [
    {prenom: "Hugo", nom: "LIEGARD", tel: "0783 97 15 15"},
    {prenom: "Salim", nom: "SOUMARE", tel: "0783 97 13 14"},
    {prenom: "Pransun", nom: "BALASUBRA", tel: "0783 97 18 19"}
];
console.log(contact);


/* 
      EXERCICE   
   Créez un tableau à 2 dimensions appelé  "AnnuaireDesStagiaires" qui contiendra toutes les coord pour chaque stagiaire.
   Ex. nom, prenom, tel            |
*/
 var AnnuaireDesStagiaires = [
     { prenom: "Hugo", nom: "LIEGARD", tel: "0783 97 15 15" },
     { prenom: "Salim", nom: "SOUMARE", tel: "0783 97 13 14" },
     { prenom: "Pransun", nom: "BALASUBRA", tel: "0783 97 18 19" }
 ];
console.log(AnnuaireDesStagiaires); 

// --exemple à 3 dimensions

var array3Dimension =[
    {
        prenom: "Hugo", 
        nom: "LIEGARD",
        coordonnées:{
            email : "hugo.liegard@lepoles.com",
            tel :{
                fixe: "0596 108 328",
                fax: "0596 108 632",
                port:{
                    prive:"07 83 97 10 15",
                    pro:"07 83 97 15 15"
                }
            },
            adresse:{
                ville:"DUCOS",
                cp:"97224",
                region:"Martinique",
                pays:{
                    code:"fr",
                    nom:"FRANCE"
                }
            }
        } 
    } // fermeture 1er
]; // fin array3Dimension
console.log(array3Dimension);
console.log(array3Dimension[0].coordonnées.email);

/* AJOUTER UN ELEMENT */

var couleur = ['Rouge', 'Jaune', 'Vert'];
// console.clear();
console.log(couleur);
console.log(couleur.length); // .length permet d'afficher sur ma console le nombre d'éléments que contient mon tableau

// Pour ajouter un élément dans mon tableau, je fais appel à la fonction push()
var nbElementsDeMonTableau = couleur.push('Violet');
console.log(couleur);
console.log(nbElementsDeMonTableau);

// Pour ajouter un élément au début de mon tableau, je vais faire appel à la fonction unshift()
//console.clear();
var nbElementsDeMonTableau = couleur.push('Bisque', 'orange');
console.log(couleur);
console.log(nbElementsDeMonTableau);

// Pour suppr le dernier élément de mon tableau je fais appel à la fonction pop()
couleur.pop()
console.log(couleur);
console.log(nbElementsDeMonTableau);

// Pour suppr le premier élément de mon tableau j'utilise à la fonction shift()
couleur.shift()
console.log(couleur);
console.log(nbElementsDeMonTableau);



























