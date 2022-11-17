class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0
    }

    //Método de instância
    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -= 2;
    }

    //método estático
    static trocaPilha(){
        console.log('Trocando pilha')
    }

}

const controle1 = new ControleRemoto('LG')

/*
controle1.trocaPilha não funciona pois é um método estático
*/

ControleRemoto.trocaPilha();
//* Só é possível chamar a instância assim */