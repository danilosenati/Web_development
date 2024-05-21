const entrada = require('readline-sync');

let nota = 0, media = 0, soma = 0;
let resposta;

for (let i = 1; i <= 4; i++) {
  console.log("O aluno realizou a prova?"); 
  console.log("Digite: 0 para sim ou 1 para não");
  resposta = entrada.questionInt();
  if(resposta === 0) {
    console.log("Digite a nota: ");
    nota = entrada.questionFloat();
    soma = soma + nota;		
  } else {
    nota = 0;
    soma = soma + nota;
  }
}
media = soma/4;

console.log("Total de pontos: "+soma);
console.log("média do aluno: "+media);

if(media >= 7) {
  console.log(" O aluno está aprovado!");
} else if (media >=5){
  console.log(" O aluno está em recuperação");
} else {
  console.log("O aluno está reprovado");
}

