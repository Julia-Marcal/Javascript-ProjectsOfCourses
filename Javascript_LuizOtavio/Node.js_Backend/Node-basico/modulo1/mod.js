const nome = 'Luiz';
const sobrenome = 'Miranda';

const falaNome = () => {
    console.log(nome, sobrenome)
}

class Pessoa {
    constructor( nome ) {
        this.nome = nome;
    }
}

module.exports = {
    nome, sobrenome, falaNome, Pessoa
}