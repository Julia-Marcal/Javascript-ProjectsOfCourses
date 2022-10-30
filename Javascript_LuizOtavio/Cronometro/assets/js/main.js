function getTimeFromSeconds(segundos){
    /*a multiplicação é para transformar os
    milisegundos em segundos */
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12 : false,
        timeZone: 'UTC' 
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;
// Indicates if the user want's to paused or unpause 

let pause_clock = 0;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
}

document.addEventListener('click', function(e){
    const el = e.target;


    if(el.classList.contains('iniciar')){
        relogio.classList.remove('pausado')
        clearInterval(timer);
        iniciaRelogio();
    }
    
    else if(el.classList.contains('pausar')){
        if (segundos == 0){
        window.alert("A clock can't be paused if is set to zero") 
        }
        else{
            if (pause_clock == 0){
                relogio.classList.add('pausado')
                clearInterval(timer);
                pause_clock = 1;
            }
            else{
                relogio.classList.remove('pausado')
                iniciaRelogio();
                pause_clock = 0;
            }
            console.log(pause_clock)
        }}

    else if(el.classList.contains('zerar')){
        pause_clock = 0;
        relogio.classList.remove('pausado')
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }
})

