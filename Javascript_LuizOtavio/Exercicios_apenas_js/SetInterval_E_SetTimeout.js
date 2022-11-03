function MostrarHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-Br', {
        hour12: false,
    });
}    

const timer = setInterval(() =>{
    console.log(MostrarHora());
}, 1000);
//Só acontece dps do intervalo setado chegar

setTimeout(() => {
    clearInterval(timer);
}, 5000);
//Acontece enquanto o intervalo setado não chegar
