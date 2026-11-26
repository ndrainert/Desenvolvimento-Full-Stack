//Função sem retorno
function imprimirSoma(a,b){

    console.log(a + b);

}

imprimirSoma(2,3);
imprimirSoma(2);// NaN (Not a Number)
imprimirSoma(2,3,4,5,6);// 5 (ignora os demais)
imprimirSoma();// NaN (Not a Number)

function soma(a,b = 0){ // valor padrão

    return a + b;
}

console.log(soma(2));// 2 (b = 0)