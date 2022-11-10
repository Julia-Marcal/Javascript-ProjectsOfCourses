class Pessoa{
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando`)
    }
    
    comer(){
        console.log(`${this.nome} está comendo`)
    }
}
// não é preciso linkar prototypes, os métodos já são linkados automaticamente
// por isso classes se tornam mais simples do q uma classe construtora por exemplo

const p1 = new Pessoa('Luiz', 'Miranda');