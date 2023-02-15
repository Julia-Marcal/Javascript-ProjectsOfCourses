require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const helmet = require('helmet');
const csrf = require('csurf')
const routes = require('./routes');
const path = require('path');
const { memoryUsage } = require('process');
const {middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middleware');

//para não aparecer erro
mongoose.set('strictQuery', false);
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    //emite um sinal para quando a base de dados for devidamente
    app.emit('pronto');
})
.catch(e => console.log(e))

app.use(express.urlencoded({ extended : true}))
//conteudo estatico css,img etc
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'segredinho',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
//maxAge é em milesimos de segundo então é necessário mulitplicalo para o tanto de dias necessários (nesse caso 7)
app.use(sessionOptions)
app.use(flash());

app.use(helmet())

//SETANDO VIEWS DO SRC
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs')

app.use(csrf());
app.use(checkCsrfError)
app.use(csrfMiddleware)
app.use(middlewareGlobal)
app.use(routes)

//o server só é aberto qnd a base de dados for totalmente ouvida
app.on('pronto', ()=> {
    app.listen(3000, () =>{
        console.log('Acessar http://localhost:3000')
    })
})

