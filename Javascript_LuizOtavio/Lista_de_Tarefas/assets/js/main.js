const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const btnTarefaLimpar = document.querySelector('.btn-tarefa-limpar');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    /*
    li é a representação de um item que foi adicionado em uma lista
    */
    const li = document.createElement('li');
    return li;
};

inputTarefa.addEventListener('keypress', function(e){
    /*
    keycode é o código da tecla que o usuario esta pressionando
    nesse caso 13 é o código do enter
    */
    if (e.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});


document.addEventListener('keydown', function(evt_delete){
    let child_exclude;
    if (evt_delete.keyCode === 46){
        if (tarefas.hasChildNodes()){
            child_exclude = tarefas.children[0].innerText.replace('Apagar', '').trim();
            tarefas.removeChild(tarefas.children[0]);
            salvarTarefas();
        }
        document.addEventListener('keydown', (evt_ctrl_z) =>{
            if (evt_ctrl_z.ctrlKey && evt_ctrl_z.keyCode === 90){
                criaTarefa(child_exclude);
                window.location.reload();
                return;
            }
        })
    }
});

function LimpaInput(){
    //limpar o q está na caixa de texto
    inputTarefa.value = '';
    //o cursor vai para a caixa de texto
    inputTarefa.focus();
};

function CriaBotaoApargar(li) {
    li.innerText += ' ';
    const BotaoApagar = document.createElement('button');
    BotaoApagar.innerText = 'Apagar';
    BotaoApagar.setAttribute('class', 'apagar');
    /*
    o title faz com que quando algm passe o mouse em cima do botão
    ele mostrará a mensagem escrita: Apagar esta tarefa
    */
    BotaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(BotaoApagar);
};

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    LimpaInput();
    CriaBotaoApargar(li);
    salvarTarefas();
};

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
});

document.addEventListener('click', function(e){
    const el = e.target;
    if (el.classList.contains('apagar')){
        /*
        se o target for o botão apagar
        exclua o pai do botão
        o pai do botão é o próprio li criado
        */
        el.parentElement.remove();
        salvarTarefas();
        //serve para salvar a tarefa no LocalStorage
    };
})


document.addEventListener('click', function(Limpar_botao){
    const element = Limpar_botao.target;
    if (element.classList.contains('btn-tarefa-limpar')){
        if (tarefas.hasChildNodes()){
            tarefas.innerHTML = '';
            salvarTarefas();
        }
        else{
            alert('A lista não tem itens')
        }
    };
})


function salvarTarefas(){ 
    //ve quais são os lis na lista de tarefas(ul) criada
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        /*
        Isso faz com que o botão apagar não 
        seja movido/reconhecido junto com o texto(li) 
        */
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    /*
    localStorage é uma mini base de dados do navegador,
    ela serve pra salvar informações de um site 
    parra quando o user voltar no mesmo ele aidna tenha 
    essa info salva.
    Para salvar algo nesse LocalStorage é necessário que 
    o que iremos salvar seja uma string.
    É por isso que estamos tornando a listaDeTarefas em 
    uma string JSON
     */
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);

};

function AdicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    /*
    pega o localStorage do navegador e paga as tarefas
    tarefas foram setadas na função anterior
    */
    const listaDeTarefas = JSON.parse(tarefas);
    /*
    Json.parse transforma uma string em um objeto  
    */
    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
        /*
        Usa a função de criar tarefas com cada objeto contido 
        na lista ListaDeTarefas criado com JSON
        */
    }
};

AdicionaTarefasSalvas();

//func delete li com o reconhecimento do botaão delete
