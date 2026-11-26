let valor;

console.log(valor); // undefined
console.log(typeof valor); // undefined

valor = null;

console.log(valor);

const prod = {};

console.log(prod.preco); // undefined
console.log(typeof prod.preco); // undefined

prod.preco = 3.50;

console.log(prod.preco); // 3.50

prod.preco = undefined; // evite atribuir undefined

console.log(!!prod.preco);

console.log(prod); // { preco: undefined }