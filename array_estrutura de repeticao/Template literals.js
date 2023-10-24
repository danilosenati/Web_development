/*Assunto retirado de:
    https://www.devmedia.com.br/javascript-template-literals/41193

    https://www.youtube.com/watch?v=7zrVK0SY1JI

*/

// SINTAXE

const valor = 'VALOR';

console.log(`Texto inicial ${[valor]} e texto final`);

console.log('*****************************');

/* NA PRATICA

Exemplo 1
Até o ES5 quando era necessário quebrar uma string em múltiplas linhas devíamos utilizar o caractere \n:

*/
const texto = "Amor é fogo que arde sem se ver\nÉ ferida que dói e não se sente";
console.log(texto);

console.log('*****************************');

// Com Template Literals podemos reescrever o mesmo código da seguinte forma:
const texto1 = `Amor é fogo que arde sem se ver
É ferida que dói e não se sente`

console.log(texto);

console.log('*****************************');

const nome = 'Danilo';

const saudacao = `Olá ${nome} seja bem vindo!
A reunião irá começar em ${2+1} minutos.`;

console.log(saudacao);