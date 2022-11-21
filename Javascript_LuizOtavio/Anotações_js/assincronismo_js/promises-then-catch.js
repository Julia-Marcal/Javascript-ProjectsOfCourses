/*Exemplo de setTimeout*/

function TimeOut(msg, tempo){
    setTimeout(() => {
        console.log(msg)
    }, tempo)
}

//TimeOut('Mensagem de exemplo', 1000);

/*Função de callback em assincronismo*/

//Resolve acontece caso os parêmetros estejam certos
//Reject irá ocorrer caso os parâmetros estejam errados

function EsperaAi(msg, tempo) {
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string') reject('Bad Value')
        setTimeout(() => {
            resolve(msg);
        }, tempo)
    });
}

EsperaAi('Frase 1', 1000)
    .then(resposta1 =>{
        console.log(resposta1);
        return EsperaAi('Frase 2', 1000)
})
    .then(resposta2 => {
     console.log(resposta2)
     return EsperaAi('Frase 3 ', 1000)
})
    .then(resposta3 =>{
        console.log(resposta3)
})
    .then(() => {
        console.log('Ultimo then')
})
.catch(e =>{
    console.log('ERRO: ', e)
})

//Encadeiamento de funções
//É preciso usar o then para chamar o return anterior
//As promisses ocorrem em paralelo com o código
//o 'e' no catch é a mensagem do reject que ser printada