const livros = require(`../models/Livro`)

class LivroController {

    /* 
    A palavra chave static define um método estático para a classe. Métodos estáticos não são chamados na instâncias da classe. Em vez disso, eles são chamados na própria classe. Geralmente, são funções utilitárias, como funções para criar ou clonar objetos.
    */
    static findAllLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }

}

//module.exports = LivroController