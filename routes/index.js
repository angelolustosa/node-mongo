const express = require(`express`)
const livros = require(`./livrosRoutes`)
const routes = (app) => {
    
    app.route(`/`).get((req, res) => {
        res.status(200).send({message: "Raiz do app vindo do route.js"})
    })

    app.use(
        express.json(),
        livros
    )
}


module.exports = routes

