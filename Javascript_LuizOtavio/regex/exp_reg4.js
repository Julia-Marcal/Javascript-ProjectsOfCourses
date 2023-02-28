const { html } = require('./base');

console.log(html.match(/<.+>.+<\/.+>/g)) //greedy
//é uma checagem de qlqr tag hmtl com qlqr conteudo dentro
//comportamento greedy vai pegar até o final da ultima tag
//<p>Olá mundo</p> <p>Olá de novo</p>
//ele vai pegar todas as tag, não apenas o primeiro p com olá mundo

console.log(html.match(/<.+?>.+?<\/.+?>/g)) //non-greedy
//<p>Olá mundo</p> seleciona apenas essa tag