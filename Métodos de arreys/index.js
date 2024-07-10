// length
var arr = [1, 2, 3, 4, 5];

console.log(arr.length);

// push (adiciona ao final)
arr.push(6);
arr.push('teste');

console.log(arr);

// pop (remove o último)

arr.pop();

console.log(arr);

// unshift (adiciona no início do arrey)

arr.unshift(0);
arr.unshift('teste 2');

console.log(arr);

// shift (remove primeiro)
arr.shift();

console.log(arr);

// acessar o último elemento
console.log(arr[arr.length - 1]);

//splice (adicionar elementos no meio OU remover algum elemento mo meio)

arr.splice(2, 0, 999);

console.log(arr);

arr.splice(4, 1);
console.log(arr);

//indexOf

console.log(arr.indexOf(5));

// join (transformar arrey em uma string)

var arr2 = ['Salve', 'Maria'];
console.log(arr2.join(' '));

// reverse
console.log(arr.reverse());