// [] encontra tudo que está dentro desse conjunto []
// ^ = negação 

const {alfabeto} = require('./base');

console.log(alfabeto.match(/[abc]/g));
// encontra abc separadamente 
console.log(alfabeto.match(/[abc]+/g));
// encontra separadamente, porém se houver sequência tbm irá encontra-lá
console.log(alfabeto.match(/[^abc]/g));
// vai encontrar tudo menos os caracteres dentro do conjunto
console.log(alfabeto.match(/[0-9]/g));
// encontra separadamente e junto no range de 0 até 9
console.log(alfabeto.match(/[a-d]/g));
// mesma coisa só q no alfabeto   
// NÃO encontra letras acentudas