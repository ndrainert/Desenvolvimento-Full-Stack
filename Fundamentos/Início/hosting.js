console.log(a);
var a = 2;
console.log(a);

/* Da erro
console.log(b);
let b = 2;
console.log(b);
*/

//hosting é o comportamento padrão do JavaScript de mover todas as declarações para o topo do escopo atual (escopo global ou escopo de função). Isso significa que uma variável pode ser usada antes de ser declarada, mas seu valor será `undefined` até que a linha de atribuição seja executada.