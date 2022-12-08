const express = require('express');
const app = express();
const routes = require('./routes')

app.use(express.urlencoded({ extended : true}))
app.use(routes)

//a interrogação torna o parametro opcional
//req.params acessa os parametros da url
//req.query acessa oq estiver na query

app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000')
})

