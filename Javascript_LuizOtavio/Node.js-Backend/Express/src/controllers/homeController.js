exports.paginaInicial= (req, res) =>{
    res.render('index')
}

exports.TrataPost = (req,res) =>{
    res.send(`Hello ${req.body.nome}`)
}