const numbers = [10, 9, 3, 11, 68, 16, 102, 8, 30, 21];

// 1.Percorra o array imprimindo todos os valores contidos nele com a função console.log().

console.log(numbers);

console.log('=============================');
// 2.Some todos os valores contidos no array e imprima o resultado.

let soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
    soma = soma + numbers[i];
}

console.log('Valor total: ' + soma);

console.log('=============================');

/* 3.Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é
o resultado da soma de todos os elementos dividido pelo número total de elementos.*/

let total = 0;
let media = 0;

for (let j = 0; j < numbers.length; j += 1) {
    total = total + numbers[j];
    media = (total / numbers.length);
}
console.log(`Tamanho do array: ${numbers.length} elementos`);
console.log(`Media: ${media}`);

console.log('=============================');

/* 4.Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça
com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média
aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor
da média aritmética é menor ou igual a 20”.
* */

if(media >20){
    console.log('O valor da média aritmética é maior que 20.');
}else{
    console.log('O valor da média aritmética é menor ou igual a 20.');
}

console.log('=============================');

// 5.Utilizando for, descubra o maior valor contido no array e imprima-o.

let valorMaior = 0;

for(let k = 0; k < numbers.length; k +=1){
    if(numbers[k] > valorMaior){  // if 10 > 0
        valorMaior = numbers[k];  // valorMaior = 10
        console.log(valorMaior);
    }
}
console.log('\n Maior valor: '+valorMaior);

console.log('=============================');

/* Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não
exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
 */

let totalImpar = 0

for(let l=0; l< numbers.length; l +=1){
    if(numbers[l] % 2 != 0){
        console.log(numbers[l]);
        totalImpar += 1;
    }
}
if(totalImpar > 0){
    console.log('Total de números impares: '+totalImpar);
}
else{
    console.log('Nenhum valor ímpar encontrado');
}


