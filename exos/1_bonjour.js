// var name=prompt('Quel est votre nom ?')
// var firstname=prompt('Quel est votre prénom ?');
// alert('Bonjour' + name + '!');
// alert('Bonjour' + firstname + '!');



// var chats = ['=^.^=']
var dessinerChats = function (combienDeFois) {
    for (var i = 0; i < combienDeFois; i++) {console.log(i+'=^.^=');
    document.write('<p>Chat ' + i + " "+ '=^.^=' + '</p>')
    }
};
dessinerChats(10);


document.write("<hr>");

var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Jacques', 'Hugo'];
// var Numero = ['1', '2', '3', '4', '5', '6', '7', '8'];

console.log(Prenoms);
// console.log(Numero);

for(let i = 0; i <Prenoms.length; i++){
    console.log(Prenoms[i]);
    document.write('<p>Prénom : <em>' + Prenoms[i] + '</em></p>');
}
document.write("<hr>");

var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Jacques', 'Hugo'];
// console.log(Prenoms);

var Numero = function (combienDeFois) {
    for (var i = 1; i <= combienDeFois; i++) {console.log(i+Prenoms);
    document.write('<p>Prénom ' + i + " "+ Prenoms + '</p>')
    }
};
Numero(8);

// for(let i = 0; i <Prenoms.length; i++){
//     console.log(Prenoms[i]);
//     document.write('<p>Prénom : <em>' + Prenoms[i] + '</em></p>');
// }

document.write("<hr>");


var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Jacques', 'Hugo'];
var Numero = ['1', '2', '3', '4', '5', '6', '7', '8'];
var Liste = [Prenoms, Numero]
console.log(Liste);

for(let i = 0; i <Liste.length; i++){
    console.log(Liste[i]);
    document.write('<p>' +Liste[i] + '</p>');
}
document.write("<hr>");

function decompte(t) {
    if (t > 0) {
        document.write([t] + '<br>');
        return decompte(t - 1);
    }else{
        return t;
    }
};

decompte(7);





