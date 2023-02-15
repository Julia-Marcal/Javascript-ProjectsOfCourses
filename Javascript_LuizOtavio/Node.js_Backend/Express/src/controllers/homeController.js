exports.paginaInicial= (req, res, next) =>{
    res.render('index', {
        titulo: 'Titulo da página',
        numeros: [0, 1, 2, 3,  4, 5, 6, 7, 8, 9]
    })
    next()
}

exports.TrataPost = (req,res) =>{
    res.send(`Hello ${req.body.nome}`)
    res.send(req.body);
}