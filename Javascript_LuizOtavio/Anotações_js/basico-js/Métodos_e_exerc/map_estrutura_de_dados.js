const pessoas = [
    { id: 3, nome: 'Luiz' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Helena'},
];

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}

console.log(novasPessoas)

//para pegar um valor especifico, exemplo:
console.log(novasPessoas.get(2))

//para deletar functiona da mesma maneira, exemplo:
novasPessoas.delete(2)
console.log(novasPessoas)

/*se fizermos "novasPessoas" como um array normal a oderm
irá mudar, e pode afetar o algoritmo.
//! mesmo que tentemos mudar a ordem para decrescente com o id em formato de stringg
//!o javascript muda automaticamente para a ordem crescente
Loogo o map é a melhor maneira para solucionar o erro do array 
//** a ordem no map não muda 
 */