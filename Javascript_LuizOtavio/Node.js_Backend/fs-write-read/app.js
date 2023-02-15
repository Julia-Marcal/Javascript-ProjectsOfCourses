const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modulos/escrever');
const ler = require('./modulos/ler');

/*
ESCREVER ARQUIVO

const pessoas = [
    {nome: 'João'},
    {nome: 'Ana'},
    {nome: 'Luiza'},
    {nome: 'Pedro'}
]

const json_f = JSON.stringify(pessoas, '', 2)
escreve(caminhoArquivo, json_f)
*/

function renderizaDados(dados){
    dados = JSON.parse(dados)
    dados.forEach(val => console.log(val.nome))
}

async function leArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}


leArquivo(caminhoArquivo)