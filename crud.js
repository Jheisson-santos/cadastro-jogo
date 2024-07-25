const prompt = require('prompt-sync')({sigint: true});
let cadastro = []
let listaGenero = ['rpg', 'fps', 'battle royale', 'aventura', 'pvp', 'estrategia', 'moba', 'mmo', 'puzzle']

let add = ()=>{
    let attGenero = ()=>{
        let att = prompt('Digite um genero valido: ')
        if(listaGenero.includes(att)){
            cadastro.push({jogo, ano, tamanho, genero})
            console.log('Genero adicionado com sucesso');
        } else {attGenero()}
    }
    let jogo = prompt('Digite o nome do jogo: ')
    let ano = +prompt('Digite o ano de lançamento: ')
    let tamanho = +prompt('Digite quantos GBs o jogo tem: ')
    let duracao = prompt('Duração do jogo em horas (xxhxx): ')
    let estudio = prompt('Digite o nome do estudio: ')
    if(!isNaN(ano) && !isNaN(tamanho)){
            if(ano >= 1962 && ano <= 2025){
            let genero = prompt('Digite o genero do jogo: ')
            if(listaGenero.includes(genero)){
                cadastro.push({jogo, ano, tamanho, genero, duracao, estudio})
                console.log('Jogo adicionado com sucesso');
            } else { 
                console.log('Genero não listado');
                attGenero()
            }} else {console.log('Ano de lançamento invalido')
            add();}
    } else {console.log('O valor digitado não é um numero valido')
        add();}
 }
module.exports.add = add

let imprimir = ()=>{
    if(cadastro.length > 0){
    cadastro.forEach((element, index) => {
        console.log(`   
    |-------- Lista ${index +1} ---------|
        Jogo:    ${element.jogo}         
        Ano:     ${element.ano}          
        Genero:  ${element.genero}       
        Tamanho: ${element.tamanho}      
        Dura:    ${element.duracao}      
        Estudio: ${element.estudio}      
   `);
});
} else {console.log('Sua STEAM esta vazia.');}
}
module.exports.imprimir = imprimir

let update = ()=>{
    let att = prompt('Qual jogo deseja atualizar? ')
    cadastro.forEach(element => {
        if(element.jogo == att){
            console.log(`
                O que deseja atualizar?
                1 - Nome do jogo
                2 - Ano do jogo
                3 - Genero do jogo
                4 - Tamanho do jogo
                5 - Duração do jogo 
                6 - Estudio do jogo`);
                let resp = +prompt('')
                switch(resp){
                    case 1:
                        let newGame = prompt('Digite o nome do jogo atualizado: ')
                        element.jogo = newGame
                        console.log('Atualizado com sucesso');
                        break;
                    case 2:
                        let newYear = prompt('Digite o ano do jogo atualizado: ')
                        element.ano = newYear
                        console.log('Atualizado com sucesso');
                        break;
                    case 3:
                        listaGenero.forEach(element => {
                            console.log(`${element}`);
                        });
                        let newGenero = prompt('Digite o genero do jogo atualizado: ')
                        if(listaGenero.includes(newGenero)){
                            element.genero = newGenero
                            console.log('Atualizado com sucesso');
                            break;
                        } else {console.log('ERRO! GENERO NÃO ENCONTRADO');}
                    case 4:
                        let newGb = prompt('Digite o tamanho do jogo atualizado: ')
                        element.genero = newGb
                        console.log('Atualizado com sucesso');
                        break;
                    case 5:
                        let newHour = prompt('Digite a duração do jogo atualizado: ')
                        element.duracao = newHour
                        console.log('Atualizado com sucesso');
                        break;
                    case 6:
                        let newEstudio = prompt('Digite o estudio do jogo atualizado: ')
                        element.estudio = newEstudio
                        console.log('Atualizado com sucesso');
                        break;
                }
        } else{console.log('Jogo não encontrado');}
    });
}
module.exports.update = update

let remove = ()=>{
    imprimir()
    let opc = prompt('Qual jogo deseja remover? ')
    cadastro.forEach(element => {
        if(element.jogo == opc){
            cadastro.splice(element, 1)
        } else{console.log('jogo não encontrado');}
    });
}
module.exports.remove = remove