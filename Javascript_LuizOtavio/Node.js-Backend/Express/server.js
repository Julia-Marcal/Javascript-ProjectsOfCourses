const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({ extended : true}))

//conteudo estatico css,img etc
app.use(express.static(path.resolve(__dirname, 'public')));

//SETANDO VIEWS DO SRC
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs')

app.use(routes)

//a interrogação torna o parametro opcional
//req.params acessa os parametros da url
//req.query acessa oq estiver na query

app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000')
})

