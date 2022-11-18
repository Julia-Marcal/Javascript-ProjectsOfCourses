function EsperaAi(msg, tempo) {
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string') {
            reject('Bad Value');
            return
        }

        setTimeout(() => {
            resolve(msg);
        }, tempo)
    });
}

const promises = [
    'Primeiro Valor',
    EsperaAi('Promise 1', 3000),
    EsperaAi('Promise 2', 1000),
    EsperaAi('Promise 3', 4000),
    'Outro Valor'
]

//PROMISE ALL
//entrega todas as promisses do array
Promise.all(promises)
    .then(function(valor){
        console.log(valor)
    })
    .catch(function(erro) {
        console.log(erro)
    })

//PROMISE RACE
//Entrega a primeira promise que for entregue

const promIses_race = [
    EsperaAi('C1', 1000),
    EsperaAi('C2', 1000),
    EsperaAi('C3', 300)
]

Promise.race(promIses_race)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro){
        console.log(erro);
    })

//Promise  e Reject 
function baixaPagina() {
    const emCache = true;

    if(emCache){
        return Promise.resolve('Página em cache');
    }else{
        return Promise.reject('É necessário baixar a página')
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log('ERRO', e))