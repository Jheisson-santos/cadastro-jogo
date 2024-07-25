const prompt = require('prompt-sync')({sigint: true});
let crud = require('./crud.js')

while(true){
console.log(`
            GREEN STEAM
        1 - ADICIONAR JOGO 
        2 - IMPRIMIR LISTA DE JOGOS
        3 - ATUALIZAR INFORMÇÕES DE UMA LISTA
        4 - EXCLUIR UMA LISTA DE JOGO
        9 - SAIR
`);
let opc = +prompt('')
switch(opc){
    case 1: 
    crud.add()
    break;
    case 2: 
    crud.imprimir()
    break;
    case 3: 
    crud.update()
    break;
    case 4: 
    crud.remove()
    break;
    case 9:
    process.exit()
    break;

    default: 
    console.log('Entrada invalida. Tente novamente');
    break;
}}
