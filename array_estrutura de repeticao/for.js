/**Fato importante sobre operadores de incremento e decremento 
 * 
 * Você poderá encontrar em outros lugares o uso do operador de incremento ++ ou
decremento --. Não recomendamos o uso deles, pois pode gerar confusão e causar
bugs inesperados. Sendo assim, utilize sempre o += 1 para incremento ou o -=1 para
decremento. Essa é a regra que iremos adotar neste conteúdo!
 * 
*/

const voltas = 50;

for (let index = 1; index <= voltas; index += 1) {
    console.log(`${index}º volta completada`);
}
console.log('\n Fim da corrida!!');

