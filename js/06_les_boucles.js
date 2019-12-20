/* ---------------------------
        LES BOUCLES
 ---------------------------*/

//  Il y a différents types de boucles, les + utilisés sont la boucle "FOR" et la boucle "WHILE"
// *-* Boucle FOR() : 
for(let i = 0; i <= 5; i++){
    document.write('<p>Nombre de tour de boucle : <em style="background:yellow;">'+ i +'</em></p>');
}
document.write("<hr>");

/* 
Pour i = 0; => j'initialise le départ de ma boucle à 0
Pour i<=5; => tant que la valeur de i est inférieure ou égale à 5
i++; => j'incrémente (j'ajoute) un tour de boucle

En gros, je donne l'instruction de faire un tour de boucle supplémentaire tant que la valeur de i n'est pas égale ou supérieure à 5
*/

// La boucle WHILE

var j = 0;
while(j <= 5){
    document.write('<p>Nombre de tour de boucle : <em style="background:yellow;">' + j + '</em></p>');
    // ATTENTION à NE PAS OUBLIER L'INCRÉMENTATION
    j++;
}
document.write("<hr>");

/* -----------------------------
            EXERCICE
------------------------------ */

// -- Supposons le tableau suivant :
var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Jacques', 'Hugo'];
// var Numero = ['1', '2', '3', '4', '5', '6', '7', '8'];

/**
* CONSIGNE : Grâce à une boucle FOR, 
* affichez la liste des prénoms
* du tableau ci-dessus dans la console, 
* ou sur votre page.
*/

console.log(Prenoms);
console.log(Numero);

for(let i = 0; i <Prenoms.length; i++){
    console.log(Prenoms[i]);
    document.write('<p>Prénom : <em style="background:yellow;">' + Prenoms[i] + '</em></p>');
}
document.write("<hr>");


