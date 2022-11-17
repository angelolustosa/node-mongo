const livros = require(`../models/Livro`)

class LivroController {

    static findAllLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }

}

module.exports = LivroController