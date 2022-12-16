require('dotenv').config()

const express = require('express');
const app = express();

const mongoose = require('mongoose')
//para não aparecer erro
mongoose.set('strictQuery', false);

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    //emite um sinal para quando a base de dados for devidamente
    app.emit('pronto');
})
.catch(e => console.log(e))

const routes = require('./routes')
const path = require('path');
const { memoryUsage } = require('process');
const {middlewareGlobal} = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended : true}))

//conteudo estatico css,img etc
app.use(express.static(path.resolve(__dirname, 'public')));

//SETANDO VIEWS DO SRC
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs')

app.use(middlewareGlobal)
app.use(routes)

//a interrogação torna o parametro opcional
//req.params acessa os parametros da url
//req.query acessa oq estiver na query


//o server só é aberto qnd a base de dados for totalmente ouvida
app.on('pronto', ()=> {
    app.listen(3000, () =>{
        console.log('Acessar http://localhost:3000')
    })
})

