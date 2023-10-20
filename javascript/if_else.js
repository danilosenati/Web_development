/* IF e ELSE */
console.log("------------------------")
let numero = 20

if(numero == 20){
    numero = 10
    
}else{
    numero = 20
}

console.log("Valor: "+numero)

console.log("------------------------")


if(1 == 20){
    numero = 8
    console.log("Valor: "+numero)
}else{
    console.log("Valor: "+numero)
}

console.log("------------------------")

let valor = 15

if(valor==15){
    valor = 30
}

if(valor===30){
    valor += 10
}

if(valor=='40'){
    valor = 25
}
if(valor!=25){
    valor -=5
}
if(valor==15){
    valor = 30
}
if(valor<=10){
    valor = 70
}

console.log(valor)

console.log("------------------------")

let valor2 = 15

if(valor2 === '15'){ /* VALOR É IGUAL MAIS O TIPO É DIFERENTE */
    valor2 = 30
    console.log(true)
}
if(valor2 === 15){ /* VALOR É IGUAL E O TIPO TB É IGUAL */
    valor2 += 10
}
if(valor2 === '40'){
    valor2 = 25
    console.log("X")
}
if(valor2 !=15){
    valor2 -= 5
    console.log("ok")
}
if(valor2 <= 10){
    valor2 = 70
}else{
    valor2 -= 2
}

console.log(valor2)

console.log("------------------------")