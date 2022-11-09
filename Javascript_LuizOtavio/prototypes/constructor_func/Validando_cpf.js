function ValidaCpf(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo',{
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, '');
            //expressão regular regex
            //tirar todas as caracteres que não sejam números 
        }
    })
};

ValidaCpf.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined')return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;

    const CpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(CpfParcial);
    const digito2 = this.criaDigito(CpfParcial + digito1);

    const novoCpf = CpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
};

ValidaCpf.prototype.criaDigito = function(CpfParcial){
    const cpfArray = Array.from(CpfParcial);
    
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((acumulador, valor_atual) =>{
        acumulador += (regressivo * Number(valor_atual))
        regressivo--;
        return acumulador;
    }, 0);    

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
    // se o digito for maior q 9 retorna 0
    // se não retorna ele normal
    //! expressão ternaria muito boa para simplicar códgio
    //o retorno é em formato string para comparar ao cpf completo mais facilmente

    
};


ValidaCpf.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo; 
};

const cpf = new ValidaCpf('705.484.450-52');
if (cpf.valida()){
    console.log('Cpf Válido');
}
    else{
        console.log('Cpf inválido')
    }