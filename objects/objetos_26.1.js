// Adicionando novas propriedades:

const pessoa = {
    primeiroNome: 'Nome',
    ultimoNome: 'Sobrenome',
    age: 33,
    dados: {
        salario: '2.500',
        profissao: 'Desenvolvedor'
    }
}

pessoa.primeiroNome = 'Rafael'
pessoa.ultimoNome = 'Andrade';
pessoa.dados.gênero = 'Masculino'

console.log(pessoa);

// ADICIONANDO PROPRIEDADES:

if(typeof pessoa.sobreNome === 'undefined'){ // Se a chave sobreNome não possuir nenhum valor.
    pessoa.sobreNome = 'Santos' // adicione a chave sobreNome e o valor Santos.
}
console.log("------------------------------");
console.log(pessoa);

// ADICIONANDO PROPRIEDADES ATRAVÉS DE FUNÇÃO  DE FORMA DINÂMICA:

const addPropriedade = (object, key, value) => {
    if(typeof object[key] === 'undefined'){
        object[key] = value;
    }
}

addPropriedade(pessoa, 'cor', 'Azul');

console.log("------------------------------");
console.log(pessoa);
