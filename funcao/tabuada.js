
let num1 = 10;
let i = 0;
let resultado = 0;
let tab = ''

function tabuada(numero){
    for(i = 0; i <= num1; i++){
        resultado = numero * i;

      tab += `${numero} x ${i} = ${resultado} \n`; 
    }
    return tab;     
}

console.log(tabuada(8));