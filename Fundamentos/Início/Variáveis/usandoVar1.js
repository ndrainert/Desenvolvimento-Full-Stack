{
    {
        {
            {
                {
                    {
                        {
                            {
                                {
                                    {
                                        var sera = 'Será???'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
console.log(sera) // Será???  - var tem escopo global, mesmo estando dentro de blocos, ela é visível fora do bloco.

function teste() {
    var local = 123;
    console.log(local);
}
teste(); // 123 - a variável local é visível apenas dentro da função teste