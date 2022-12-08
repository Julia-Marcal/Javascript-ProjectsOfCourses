exports.paginaInicial= (req, res) =>{
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome"><br>
    Idae: <input type="number" name="idade">
    <button>Enviar</button>
    </form>
    `);
}

exports.TrataPost = (req,res) =>{
    res.send(`Hello ${req.body.nome}`)
}