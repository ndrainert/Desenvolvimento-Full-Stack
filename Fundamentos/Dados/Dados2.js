let preco = 19.90; // Variável do tipo number
let desconto = 0.4; // Variável do tipo number

console.log(19.9 * 0.6); // Imprime o resultado da multiplicação

//Quando utilizamos dessa forma fica mais fácil de entender o que está acontecendo, pois estamos utilizando variáveis com nomes significativos.
console.log(preco * (1 - desconto)); // Imprime o resultado da multiplicação utilizando variáveis

//Outra forma de utilizar variáveis é armazenando o resultado em uma nova variável, como no exemplo abaixo:
let precoComDesconto = preco * (1 - desconto);

console.log(precoComDesconto); // Imprime o valor da variável precoComDesconto

//Vamos usar a função de concatenar variáveis para imprimir uma mensagem mais completa, como no exemplo abaixo:

let nome = "Caderno"; // Variável do tipo string
let categoria = "Papelaria"; // Variável do tipo string

console.log("Produto: " 
    + nome 
    + ", Categoria: " 
    + categoria); // Imprime uma mensagem concatenando variáveis em uma sentença de código