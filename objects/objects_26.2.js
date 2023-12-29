const dados = {
    nome: 'Frederick Pimenta Malagyueta',
    nacionalidade: 'Escocia',
    idade: 41,
    peso: 69,
    altura: 1.69
}

/*
Object.keys() retorna um array onde os elementos são os nomes das propriedades(chaves)
em forma de strings.
*/
console.log(`keys do objeto: ${Object.keys(dados)}\n`);

/*
Object.values() retorna um array que contém os valores das propriedades do objeto.
* */
console.log(`Values do objeto: ${Object.values(dados)}\n`);


/* 
O método Object.entries() é usado para retornar uma matriz que consiste em pares de propriedade [chave, valor] enumeráveis ​​do objeto que são passados ​​como o parâmetro.
* */
console.log(Object.entries(dados));
