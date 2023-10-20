/* Utilize if/else para escrever um código que retorne o maior de dois números.
Defina, no começo do seu código, duas variáveis com os valores que serão comparados. */

let numero1 = 100, numero2 = 10, numero3 = 21;

if(numero1 > numero2){
    console.log(numero1+' é maior');
}
else{
    console.log(numero2+' é maior');
}

console.log('=====================');

/** Utilize if/else para escrever um código que retorne o maior de três números.
 * Defina, no começo do seu código, três variáveis com os valores que serão comparados. */

console.log('1º valor = '+numero1+', 2º valor = '+numero2+', 3º valor = '+numero3);

if(numero1 > numero2 && numero1 > numero3){
    console.log('O maior valor de três números é: '+numero1);
}
else if(numero2 > numero3){
    console.log('O maior valor de três números é: '+numero2);
}
else{
    console.log('O maior valor de três números é: '+numero3);
}