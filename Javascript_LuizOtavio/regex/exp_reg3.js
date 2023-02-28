//* (opcionais) 0 ou n vezes
//+ (obrigatório) 1 ou mais vezes
//? (opcionais) 0 ou 1
// \ para que a caractere dps dela seja procurada em seu sentido literal 
// {n, m} n = quantidade minima de vezes, m = o máximo de vezes
// . representa qualquer caractere

const {texto, arquivos} = require('./base');

const regExp1 = /Jo+ão+/gi;
//deve existir pelo menos 1 ou mais O
//então jooaooooo tbm será reconhecido como um joão

const regExp2 = /\.jpe?g/gi
//const regExp2 = /\.jpe{0,1}g/gi funciona da mesma maneira
// o e do jpeg pode aparecer o n 
//então arq jpg e jpeg serão encontrados

for (const arquivo of arquivos){
    console.log(arquivo.match(regExp2))
}