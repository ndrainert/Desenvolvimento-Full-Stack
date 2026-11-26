var num = 1;

{

    let num = 2;
    console.log('dentro =', num); // 2 - let tem escopo de bloco, então a variável num dentro do bloco é diferente da variável num fora do bloco.

}
console.log('fora =', num); // 1 - let tem escopo de bloco, então a variável num fora do bloco não é afetada pela variável num dentro do bloco.

var num1 =2;

{

    let num3 = 3;
    console.log('dentro =', num1); // 3 - let tem escopo de bloco, então a variável num3 dentro do bloco é diferente da variável num1 fora do bloco.

}
console.log('fora =', num1); // 2 - let tem escopo de bloco, então a variável num1 fora do bloco não é afetada pela variável num3 dentro do bloco.