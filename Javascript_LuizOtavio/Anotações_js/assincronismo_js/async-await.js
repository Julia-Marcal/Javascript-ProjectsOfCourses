/*Exemplo de setTimeout*/

function TimeOut(msg, tempo){
    setTimeout(() => {
        console.log(msg)
    }, tempo)
}

function EsperaAi(msg, tempo) {
    return new Promise((resolve, reject)=>{
        if(typeof msg !== 'string') reject('Bad Value')
        setTimeout(() => {
            resolve(msg);
        }, tempo)
    });
}

async function execute_async() {
    try{
        const fase1 = await EsperaAi('Fase 1', 1000)
        console.log(fase1)
    
        const fase2 = await EsperaAi('Fase 2', 1000)
        console.log(fase2)
    
        const fase3 = await EsperaAi('Fase 3', 1000)
        console.log(fase3)
    
        console.log('Terminou')     
    } 
    catch(e){
        console.log(e)
    }  
}
//se houver algum erro o async-await só ira executar promises antes do erro

execute_async();