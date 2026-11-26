var num = 1

{

    var num = 2
    console.log('dentro =', num)

}

console.log('fora =', num) // 2 - var tem escopo global, mesmo estando dentro de blocos, ela é visível fora do bloco.