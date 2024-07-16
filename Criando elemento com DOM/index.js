var tagP = document.createElement("p");

var conteudo = document.createTextNode('Deu bom?');

tagP.appendChild(conteudo);

console.log(tagP);

var body = document.querySelector("body");

body.appendChild(tagP);