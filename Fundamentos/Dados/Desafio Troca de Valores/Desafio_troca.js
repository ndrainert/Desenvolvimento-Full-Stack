//Desafio: Troca de valores entre variáveis
let a = 7;
let b = 94;

let c = a;
a = b;
b = c;

console.log("O valor de a é: " + a);
console.log("O valor de b é: " + b);

//Utilizando a desestruturação de arrays, podemos trocar os valores das variáveis a e b de forma mais simples:
[a, b] = [b, a];
console.log("O valor de a é: " + a);
console.log("O valor de b é: " + b);