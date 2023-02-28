//match = achar ocorrência de uma palavra baseada no texto 
//replace = troca uma palavra por outra (se for uma string ñ tem insensitive)

const { texto } = require('./base');
const regExp1 = /João/i;

console.log(texto.match(regExp1))

//console.log(texto.replace('João', 'Felipe'))
//console.log(texto.replace(/João/gi, 'Felipe'))

console.log(texto.replace(/(João|Maria)/gi, '"$1"'));
// qualquer joão ou maria encontrados ser]ao colocador entre aspas duplas
//$1 representa os parenteses

console.log(texto.replace(/(João|Maria)/gi, function(input){
    return input.toUpperCase
}));
//Colocar todos as palavras dentro do parênteses em CAPSLOCK