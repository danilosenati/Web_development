const data = [40, 51, 4, 78, 32, 55, 465]

const news = [5, 85, 74, 'front', 63, 9]

function total(array) {
    let soma = 0
    for (let index = array.length -1; index >= 0; index -= 1) {
        soma += array[index]
        console.log(array.length, soma );
    }

    return soma
}

if(news.indexOf(news) !== -1){
    console.log('O array contém a string');
}else{
    console.log('O array não contém a string')
}
console.log(total(news));