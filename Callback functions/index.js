function exibir(num) {
    console.log('A operaração resultou em: ' + num);
}

function soma (a, b, callback) {
    var op = a + b;
    callback(op);
}

function multi(a, b, cb) {
    var op = a * b;
    cb(op);
}

soma(3, 2, exibir);

multi(2, 4, exibir);