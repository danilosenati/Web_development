const dados = { nome: 'Maria', cpf: '85214563', idade: 18 };

console.log(dados.nome);
console.log(dados.idade);

// CRIANDO OBJETOS:

// https://www.youtube.com/watch?v=yFrd7712G3I

let pessoa = {
    nome: 'Pedro',
    peso: 75,
    idade: 19,
    altura: 1.70
}

let informacoes = {
    descricao: '',
    notas: []
}

const motos = {
    marca: ['Yamaha', 'Suzuki', 'Honda'],
    modelo: ['Factor','V-STROM', 'Titan'],
    ano: [2022, 2023, 2021]
}

// UTLIZANDO O "." PARA ACESSAR UMA PROPRIEDADE:
console.log(motos.marca);
console.log(`Nome do propritário: ${pessoa.nome}, marca da moto: ${motos.marca[2]}`);

// UTLIZANDO O "['']" PARA ACESSAR UMA PROPRIEDADE:

