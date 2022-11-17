const express = require(`express`)
const LivroController = require("../controllers/livroController")

const router = express.Router()

router.get('/livros', LivroController.findAllLivros)

module.exports = router