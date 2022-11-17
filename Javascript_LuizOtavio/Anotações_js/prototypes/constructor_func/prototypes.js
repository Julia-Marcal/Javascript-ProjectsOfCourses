/* O uso de prototype melhora a performance, o método ou valor só será acessado quando for chamado e assim
não será necessário adicionar todos os valores e métodos na própria função construtura*
*/

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
};

Pessoa.prototype.NomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome
}
//! Quando já existe um método criado na funcão não é possível sobrescreve-lo

Pessoa.prototype.idade = Pessoa.idade
//! Criando mais uma propriedade em Pessoa


const Pessoa1 = new Pessoa('Julia', 'Marcal');
const Pessoa2 = new Pessoa('Geovana', 'Farias');

console.dir(Pessoa1)

Pessoa1.idade = 18
//Setando idade da pessoa1

console.dir(Pessoa1)
console.dir(Pessoa2)
console.dir(Pessoa2.idade)
//! Existe um espaço para idade em pessoa2 mas não foi setado