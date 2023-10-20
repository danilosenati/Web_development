/*
Explicação retirada de:
    https://awari.com.br/javascript-operadores-logicos-and-e-or/?utm_source=blog&utm_campaign=projeto+blog&utm_medium=JavaScript:%20Operadores%20L%C3%B3gicos%20AND%20e%20OR#:~:text=l%C3%B3gicos%20do%20JavaScript-,O%20operador%20AND%20(%26%26)%20em%20JavaScript,)%20ou%20falsos%20(false).

    https://www.javascriptprogressivo.net/2018/08/And-Or-Not-Operador-Logico-JavaScript.html
    */

/* JavaScript: Operadores Lógicos AND (&&) e OR (||) */

//OPERADOR AND

const valorA = true;
const valorB = false;

console.log(valorA && valorB);

const age = 1;
const acompanhadoResponsavel = true;

if(age >= 3 && acompanhadoResponsavel){
    console.log('Pode viajar!');
}else{
    console.log('Não pode viajar!');
}

console.log("-----------------------");

//OPERADOR OR

console.log("Trabalhando com OR");
console.log(valorA || valorB);

if(age >= 3 || acompanhadoResponsavel){
    console.log('Pode viajar!');
}else{
    console.log('Não pode viajar!');
}

// 2º EXEMPLO:

const principalDrink = 'café';
const alternativeDrink = 'Suco de laranja';

if(principalDrink === 'café' || alternativeDrink === 'Suco de laranja'){
  console.log('Agradeço por me atender!')
}else{
  console.log('Ei, nã ofoi isso que eue pedi.')
}

console.log("------------------------");

// OPERADOR NOT

/**
 * NOT em inglês significa não, é a negação.
    Sempre que colocamos esse operador perto de alguma condição, 
    ele altera o valor dela de verdadeiro para falso (true para false) ou o contrário, de falso para verdadeiro. */

  if(true){
    console.log("Esse código sempre executa!");
  }
  
  if(!true){
    console.log("Esse código nunca executa!");
  }

