const cliente = {
    primeiroNome: 'Mateus',
    idade: 18
}
console.log(cliente);
console.log('----------------------------------');
// Adicionar propriedades através de função
console.log('Atualizando os dados...');
// Criand função:
const addPropriedades = (object, key, value) => {
    if (typeof object[key] === "undefined") {
        object[key] = value;
    }
}

// Chamada da função passando os valores dos parâmetros:
addPropriedades(cliente, 'localNascimento', 'Hospital');
addPropriedades(cliente, 'Nacionalidade', 'Brasil');

/* Nós conseguimos criar uma função responsável por adicionar novas propriedades a um
objeto apenas caso elas não existam. Dessa forma podemos adicionar quantas
propriedades quisermos, de forma dinâmica, sem sobrescrever nenhuma informação. */

console.log(cliente);