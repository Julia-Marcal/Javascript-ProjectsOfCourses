function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor){
        console.log('Saldo insuficiente')
        this.verSaldo();
        return
    }
    this.saldo -= valor;
    this.verSaldo()
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo()
};

Conta.prototype.verSaldo = function(){
    return (`Ag/c. : ${this.agencia}/${this.conta} |` + 
    `Saldo: R$${this.saldo.toFixed(2)}`)
}



function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

Conta.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)){
        console.log('Saldo insuficiente')
        this.verSaldo();
        return
    }
    this.saldo -= valor;
    this.verSaldo()
};

//o ato de sobrescrever ocorre apenas na constructor function filha e não afeta as outras

function ContaPoupança(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupança = Object.create(Conta.prototype);
ContaPoupança.prototype.constructor = ContaPoupança;