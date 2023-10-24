/**Array é uma estrutura de dados que nos permite armazenar uma lista de elementos. São
úteis para inserir, alterar ou remover itens de uma lista de compras por exemplo.
Cada elemento desta lista possui um identificador chamado index, que é um valor
numérico que se inicia em 0. Veja um exemplo de array de lista de compras em um
supermercado: */

const produtosList = ['Arroz', 'Leite', 'Batata', 'Açucar'];

// Acessando elementos de um array:

// Acessando o primeiro elemento do array produtosList
console.log(produtosList[0]);

/* Você também pode salvar o retorno do acesso ao índice do array em uma variável ou
constante. Isso ajuda na legibilidade do seu código. */

const laticínio = produtosList[1];
console.log(laticínio);

/* Para alterar o valor de um elemento de um array, basta você acessar um elemento e
passar um novo valor para ele. */

produtosList[2] = 'Feijão';
console.log(produtosList[2]);
console.log('=============================');

/* ADICIONANDO ELEMENTOS EM UM ARRAY:

    push() : Adiciona um elemento ao final do Array.

    unshift() : Adiciona um elemento no inicio do array.

*/

produtosList.unshift('Carne');
console.log(produtosList);

produtosList.push('Frango');
console.log(produtosList);


/* REMOVENDO ELEMENTOS DE UM ARRAY:

    pop() : remove o ultimo elemento de um array.

    shift() : Remove o primeiro elemento do array
*/
console.log('=============================');
numerosList = [2, 3, 4, 5, 6, 7, 8, 1, 9, 0];
console.log(numerosList);

numerosList.pop();
numerosList.shift();
console.log(numerosList);

console.log('============================='); 
// VERIFICANDO O TAMANHO DO ARRAY

console.log(`O array possui: ${produtosList.length} elementos`);

console.log(`O  array possui: ${numerosList.length} elementos`);