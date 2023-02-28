//g = global (encontra todas as ocorrências)
//i = insensitive (Não é sensível a caps lock, acha todas as ocorrências independentemente)
// | = ou (não precisa ser dentro de um grupo)
//.test = checha se existe a palavra no texto
const {texto} = require('./base');

const regExp1 = /(maria|joão)/gi;
const regExp2 = /(maria|joão|luiz)(, hoje sua esposa)/gi;

const found = regExp1.exec(texto)
const check = regExp1.test(texto)

console.log(found[0])