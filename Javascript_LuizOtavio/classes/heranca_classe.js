class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado){
            console.log('ja ligado')
            return;
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.lgiado) return;
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        //herdar caractristicas desejada
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }
    
    ligar() {
        if(this.ligado){
            return 'Tablet já ligado'
        }
        this.ligado = true;
    }
    
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy')
const t1  = new Tablet('Ipad', true)
