//Armazenando uma função em variável
const imprimirSoma = function(a, b) {
    console.log(a + b);
};

imprimirSoma(2, 3);

//Armazenando uma função arrow em variável
const soma = (a, b) => {
    return a + b;
};

console.log(soma(2, 3)); // 5

//Retorno implícito
const subtracao = (a, b) => a - b;

console.log(subtracao(2, 3)); // -1