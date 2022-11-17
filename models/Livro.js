const mongoose = require(`mongoose`)

const livroSchema = new mongoose.Schema(
    {
        id: { type: String },
        title: { type: String, require: true },
        autor: { type: String, require: true },
        editora: { type: String, require: true },
        numeroPaginas: { type: Number },
    }
)

// se náo tivesse criado ele criaria sozinho
const livros = mongoose.model(`livros`, livroSchema)

module.exports = livros