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
    preco: []

}

const motos = {
    marca: ['Yamaha', 'Suzuki', 'Honda'],
    modelo: ['Factor', 'V-STROM', 'Titan'],
    ano: [2022, 2023, 2021]
}

// UTLIZANDO O "." PARA ACESSAR UMA PROPRIEDADE:
console.log(motos.marca);
console.log(`Nome do propritário: ${pessoa.nome}, marca da moto: ${motos.marca[2]}`);

// UTLIZANDO O "['']" PARA ACESSAR UMA PROPRIEDADE:
console.log(motos['modelo']);
console.log(`Marcas da moto: ${motos['marca']}`);

// REALIZANDO OPERAÇÃO MATEMATICA CALCULO DO IMC:
// toFixed(x) limita o número de casas decimais.

let imc = pessoa.peso / (pessoa.altura * pessoa.altura);
console.log(`Peso: ${imc.toFixed(2)}`);

console.log('----------------------------------');

// ALTERANDO OU ATUALIZANDO O VALOR DA PROPRIEDADE:
pessoa.nome = 'Rafael Sampaio';
informacoes.descricao = 'Todos os direitos reservados';
informacoes.preco = ['20.200'];

console.log(`Nome atualizado: ${pessoa.nome}\nInformações: ${informacoes.descricao}\nNota: ${informacoes.notas}`);

console.log('------------------------------------------------');

// UTILIZANDO SPREED OPERATOR PARA ATUALIZAR OU ALTERAR OS VALORES DA PROPRIEDADE:
informacoes.preco = [...informacoes.preco, 900.00, 7.800, 16.500]; // ...informacoes.preco evita que o primeiro valor seja subscrito por 900.00.
motos.ano = [...motos.ano, 1950,20021, 2025];

console.log(`Idades: ${pessoa['idade']}`);
console.log(`Preços: ${informacoes.preco}`);
console.log(`${motos['ano']}`);
console.log(pessoa['nome']);