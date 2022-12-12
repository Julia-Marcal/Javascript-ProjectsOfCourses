exports.paginaInicial= (req, res) =>{
    res.rende('index')
}

exports.TrataPost = (req,res) =>{
    res.send(`Hello ${req.body.nome}`)
}