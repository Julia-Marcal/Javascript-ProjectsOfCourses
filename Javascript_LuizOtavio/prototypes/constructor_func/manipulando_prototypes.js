function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

//Set prototype criando a partir da função construtora 
const p1 = new Produto('Camiseta', 50);


//Set prototype herdando por "fora"
const p2 = {
    nome: 'Caneca',
    preco : 15
};

Object.setPrototypeOf(p2, Produto.prototype)

//Set prototype criando a partir da função construtora e do prototype
const p3 = Object.create(Produto.prototype, {
    nome:{
        writable: true,
        configurable: true, 
        enumerable: true,
        value: 'Calça'
    },
    tamanho_da_calça: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: 40
    }
});
//É possível settar o objeto tanto com properties qnt settando manualmente 
//Também tem como adicionar uma chave que não existia na função construtora
p3.preco = 110;
p3.aumento(3);
console.log(p3)