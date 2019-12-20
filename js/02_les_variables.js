/* ***********
LES VARIABLES
*************** */

// Je crée une alerte pour vérifier que mon fichier js est bien connecté
// alert("js okay");

/* 
Lorsque l'on a besoin de stocker une info, on utilise une variable. Une variable peut être interprétée comme une boîte dans laquelle nous allons stocker une info.

IL EXISTE PLUSIEURS TYPES DE VARIABLES

*/

// Pour déclarer une variable :
var prenom;

// Pour lui déclarer (affecter) une valeur :
var prenom="Cinnie";
prenom="Cinnie";
const PRENOM="matias";
// const prenom2="matias"; // Ne change jamais

// Pour afficher la valeur d'une variable : 
// a- Pour tester une valeur on ouvre la console du navigateur (f12), puis on écrit le nom de la variable à droite des ">>" puis ENTER

// b- Afficher une alerte avec la variable (NE PAS METTRE DE GUILLEMETS)
alert(prenom);

// c- On écrit dans le script (code)
console.log(prenom); //fonction native

// Il est possible d'écrire plusieurs variables sur une seule ligne : 
var nb1, nb2, nb3;
// Et d'y affecter des valeurs :
nb1=1;
nb2=50;
nb3=220;

// Une instruction se termine toujours par un ;

// Le nom d'une variable peut comporter des lettres et des chiffres mais exclut les signes de ponctuation (espace, accent...)

// !\ LE JS EST SENSIBLE à LA CASSE /!

/* 
mavariable =/= de maVariable ou ma_variable
*/
// snake case =>ma_variable

/*********************** 
LES TYPES DES VARIABLES
************************/

// -- typeof, me permet de connaître le type de ma variable :
console.log(typeof prenom);

// -- Déclaration et affectation d'un nombre : 
var age=40;
console.log(typeof age);

// -- Les variables de type FLOAT
var uneDecimale=-2.984;
console.log(typeof uneDecimale); // La console retourne "number" donc un ou des chiffres

// -- Les variables de type BOOLÉENS (boolean)
// Le booléen permet de vérifier si l'info est vraie ou fausse
var unBoolean=false; // true
console.log(typeof unBoolean) // retourne false
console.log(unBoolean) // retourne boolean

// -- Les CONSTANTES

// La déclaration CONST permet de créer une constante accessible UNIQUEMENT en lecture. Sa valeur ne pourra pas être modifiée par des réaffectations ultérieures. Une constante ne peut pas être déclarée à nouveau.

const HOST="localhost";
const USER="root";
const PASSWORD="mysql";
/* 
Donc il est imposs de faire cela :
    const USER="Cinnie";
La console me retournera => SyntaxError : redeclaration of const USER
*/
// Dans la convention on écrit les constantes en maj pour les reconnaître
var unNombre="24";
console.log(unNombre); // affiche 24
console.log(typeof unNombre); // retourne string (une chaîne de caractères)

// pour convertir le STRING "24" en number : 
unNombre=parseFloat(unNombre); // parseFloat permet d'interpréter le string 24 en chiffre 24
console.log(unNombre); // affiche 24
console.log(typeof unNombre); // retourne number

// pour convertir un chiffre en string
var nb4=93;
console.log(nb4); // affiche 93
console.log(typeof nb4); // la console interprète le nb4 comme un chiffre

nb4 = nb4.toString(); // toString permet de convertir un nbre entier ou décimal en chaine de caractères (string)
console.log(typeof nb4);
