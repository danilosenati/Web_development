// window.alert("Este é um alerta do Javascript")
// window.confirm("Deseja realmente sair?")
// window.prompt("Qual é o seu nome?", "Digite seu nome aqui") //  EXIBE UMA MENSAGEM PARA O USUARIO PRENCHER O NOME

// var nome = prompt("Qual é o seu nome?", "Digite seu nome aqui") // variavel nome irá receber o valor digitado pelo usuário
// alert("Seu nome é "+nome) //exibindo o valor digitado pelo usuario.

// var nome = prompt("Qual é o seu nome?", "Digite seu nome aqui")
// var sobrenome = prompt("Qual é o seu sobrenome?", "Digite seu nome aqui")

// var titulo = document.getElementById('titulo')

// var nomeCompleto = nome + " "+sobrenome
// titulo.innerHTML = nomeCompleto

//TRABALHANDO COM LET, VAR, CONST
var variavel = 13; 
let variavel2 = "Nome";
const varvar = 101;

// var pode ser utilizado em qualquer parte do código
if(true){
    var nome = "Maria"
    console.log(nome)
}
nome = "João"
console.log("Nome "+nome)
// *********************************

// let só funciona dentro do escopo do if
if(true){
    let nome = "Maria"
    console.log(nome)
}
console.log("Nome "+nome) // esse código não vai funcionar, pq está fora do escopo.
// *************************************

// const o valor não vai ser alterado durante a execução do programa.
const idade = 34;
console.log(idade)

idade = 35 // atribuição não permitida.
console.log(idade)
