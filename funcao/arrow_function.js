/*ASSUNTO PESQUISADO EM:
https://www.hashtagtreinamentos.com/arrow-function-em-javascript?gad=1&gclid=Cj0KCQjwhfipBhCqARIsAH9msbnJtRta0cTecqZYm57k-M4SC5LFQrtqOPwp__u-kxkIKYHtzrqlh84aArZ7EALw_wcB
*/

// FUNCAO NORMAL
    function soma(num1, num2){
        return num1 + num2;
    };

    console.log(soma(1,2));

// ARROW FUNCTIONS
/*
Uma arrow function nada mais é do que uma forma diferente e mais enxuta de escrever certas funções.
*/

const subtracao = (num3, num4) =>{
    return num3 - num4;
};

/* Segunda ação pra simplificar:
Remova as chaves
Quando uma função tem apenas uma instrução e essa instrução é o retorno (return), não precisamos escrever explicitamente a palavra return.
Podemos simplesmente colocar o valor que será retornado após a seta =>.
*/
const subtraction = (num3, num4) => num3 - num4;

const sum = (num1) => num1 + 5;
console.log(sum(3));
console.log('####################');
/*
Funções com várias instruções no formato arrow function em JavaScript.
*/
let resultado = '';

function superFuncao(a, b) {
    let subtracao = a - b;
    subtracao = subtracao - 2;
    let diaDoMes = new Date().getDate();
    resultado += `1º subtração: ${subtracao} e dia ${diaDoMes}\n`;
    return resultado;
}
console.log(superFuncao(7,2));

/*
Criei essa função apenas para ilustrar, mesmo que não tenha um sentido prático. 
Ela possui mais de uma instrução e recebe mais de um argumento, 
o que é importante para observarmos como transformar uma função assim em uma arrow function em JavaScript.
*/

const superFuncaoVersao2 = (a, b) => {
    let subtracao = a - b;
    subtracao = subtracao - 2;
    let diaDoMes = new Date().getDate();
    resultado += `2º subtração: ${subtracao} e dia ${diaDoMes}\n`;
    return resultado;
}
console.log(superFuncaoVersao2(7,3));

/*
Não foi possível simplificá-la, pois é uma função com mais de um parâmetro e tem mais de uma instrução além do return. 
Portanto, não há muita diferença entre elas nesse caso específico.

Em resumo, o uso de arrow functions permitirá uma sintaxe mais enxuta em certos casos, 
mas em outros casos, como funções com várias instruções, a diferença será mínima.
*/