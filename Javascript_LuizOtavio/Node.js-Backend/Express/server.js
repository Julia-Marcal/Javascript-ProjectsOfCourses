const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        { extended : true}
        )
    )

//CRUD -> CREATE, READ, UPDATE, DELETE
//        POST    GET   PUT     DELETE

//app.get('caminho', (requisição, resposta))

app.get('/', (req,res)=> {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome"><br>
    Idae: <input type="number" name="idade">
    <button>Enviar</button>
    </form>
    `);
});

//a interrogação torna o parametro opcional
//req.params acessa os parametros da url
//req.query acessa oq estiver na query

// /profiles/?chave1=valor1&chave2=valor2
// paramentro/ query    separação query     


app.get('/test/:idUsuarios?', (req, res)=>{
    res.send('oi')
})

app.post('/', (req, res) =>{
    res.send(`Olá ${req.body.nome} Idade:${req.body.idade}`)
})

app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000')
})

