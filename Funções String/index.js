// length

var nome = 'Weslley';

console.log(nome.length);

// indexOf

var frase = 'o rato roeu a roupa do rei de Roma';

console.log(frase.indexOf('roeu'));

// slice

var roeu = frase.slice(7, 11);

console.log(roeu);

//replace

var novaFrase = frase.replace('roeu', 'teste');

console.log(novaFrase);

//toLowerCase e toUpperCase

var frase = 'Esta é a frase que vamos manipular';

var fraseCaixaAlta = frase.toLocaleUpperCase();

console.log(fraseCaixaAlta);
console.log(fraseCaixaAlta.toLowerCase());


// trim (Remove os espaços)
var nome = '      Weslley    ';

var nomeTrim = nome.trim();

console.log(nome);;
console.log(nomeTrim);


// split (Cria um arrey com o conteúdo, o parâmetro da função será o que dividirá o conteúdo)

console.log(frase.split(' '));

// lastIndexOf (Puxa o indice da última letra da string)

var frase2 = 'este teste numero dois para teste de função';

console.log(frase2.indexOf('teste'));

console.log(frase2.lastIndexOf('teste'));

