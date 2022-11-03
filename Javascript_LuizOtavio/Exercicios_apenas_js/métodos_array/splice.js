const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

const removidos = nomes.splice(4, 1);

//adiciona o objeto no indice indicado
const adicionar = nomes.splice(3, 0, 'Luiz');

//remove objeto antigo e adciona o objeto no indice indicado
const trocar = nomes.splice(3, 1, 'Sergio');

//simular push
nomes.splice(nomes.length, 0 , 'Sidney' ,'Joana')

//simular unshift
nomes.splice(0, 0, 'Geovana' , 'Carlos')
console.log(nomes)