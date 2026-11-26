const valores = [10, 20, 30, 40, 50];
console.log(valores[0]); // 10
console.log(valores[2]); // 30
console.log(valores[4]); // 50

valores[5] =100;
console.log(valores[5]);

valores.push({id: 3}, false , null, 'teste');
console.log(valores);

valores.pop();
console.log(valores);

delete valores[0];
console.log(valores);

console.log(typeof valores); // object