function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};


function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco)
    this.cor = cor
}
//call é um tipo de herança
//Então os parâmetros da Camiseta usaram o this do objeto chamado no .call


Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

/*
*isso cria um novo objeto que herda o __proto__ de produto e faz com que 
*esse objeto seja linkado a camiseta
!Porém agora o construtor é o objeto vazio e o construtor desse objeto é o Produto
! dai é necessário mudar o constructor
*/

/* 
*Explicação do professor:
Mais especificamente no trecho:

Camiseta.prototype = Object.create(Produto.prototype);

Estamos, claramente, falando que o Camiseta.prototype é um novo objeto vazio que tem como protótipo Produto
.prototype. Dessa forma, estamos adicionando Camiseta.prototype na cadeia de protótipos de Produto. 
Por consequência, tudo o que não existir em Camiseta nem em Camiseta.prototype será delegado para Produto.
prototype (e assim por diante até chegar no topo da cadeia de protótipos). Por isso vejo o termo delegação 
como mais adequado para este comportamento
/*

/*
É possível trocar o Object.create por Object.setPrototypeOf(Shirt.prototype, Product.prototype);  
porém Object.create é melhor em questão de performance
*/



/*
*É possível sobrescrever funções herdadas 
*EXEMPLO:
*/

Camiseta.prototype,aumento= function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}
//agora a function aumentará por porcetagem de aumento e não por valor inteiro


function Caneca(nome, preco , material, estoque){
    Produto.call(this, nome, preco)
    this.material = material
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if (typeof valor !== 'number') return 'Error';
            estoque = valor;
        }
    });
};

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta('Regata', 10, 'Preta');
const caneca = new Caneca('caneca', 15, 'Porcelana', '200');

console.log(camiseta)
console.log(caneca)
console.log(caneca.estoque)