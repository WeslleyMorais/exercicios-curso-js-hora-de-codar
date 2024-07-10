//Aula 24 Alterandoo DOM com um for
var lista = ['Laranja', 'Maça', 'Pera', 'Jaca', 'limão'];

var listaUl = document.createElement('ul');

var body = document.getElementsByTagName('body');

body[0].appendChild(listaUl);

var lsitaNoBody = document.getElementsByTagName('ul')

for(var i=0; i < lista.length; i++){
    var liFor = document.createElement('li');

    var textoLi = document.createTextNode(lista[i]);

    liFor.appendChild(textoLi);

    lsitaNoBody[0].appendChild(liFor);
}