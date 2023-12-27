// Declarando objeto:
//const objetoDados={}

const objetoDados = {
    nome: "Marcos", // nome é a chave e Marcos é o valor.
    idade: 25
}

console.log(objetoDados.nome);

// Outra forma de acessar a informação do objeto:
console.log(objetoDados["nome"]);

/* OBJETO DENTRO DE OBJETO:
    No objeto conta abaixo, o valor da chave banco guarda outro objeto:
*/
const conta ={
    agencia: '2222',
    banco: { // Segundo objeto.
        codigo: 101,
        id: 5,
        saldo: '200.00',
    }
}

console.log(`Saldo da conta: ${conta.banco['saldo']}`);

// OBJETOS DENTRO DE UM ARRAY:
 const nomes = [
    { nome: 'João', peso: 75, idade: 19, altura: 1.70 },
    
    { nome: 'José', peso: 70, idade: 23, altura: 1.80 },
    
    { nome: 'Zacarias', peso: 85, idade: 41, altura: 1.76 },
    
    { nome: 'Isabel', peso: 72,
    idade: 37, altura: 1.69,
    conta: {
        agencia: '0001',
        banco: 'VSCODE'
        }    
    }

 ]

 console.log(`Idade de ${nomes[0].nome} é: ${nomes[0].idade} anos`);
 
 console.log(`Nome do(a) cliente: ${nomes[3].nome}, número da agência: ${nomes[3].conta.agencia}, nome do banco: ${nomes[3].conta.banco}`);
