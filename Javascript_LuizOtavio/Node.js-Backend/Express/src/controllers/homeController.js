exports.paginaInicial= (req, res, next) =>{
    res.render('index')
    next()
}

exports.TrataPost = (req,res) =>{
    res.send(`Hello ${req.body.nome}`)
    res.send(req.body);
}