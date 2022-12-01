// CONFIG INICIAL   
const express = require(`express`)
const app = express()
const db = require(`./config/dbConnect`)

// https://devpleno.com/morgan
const morgan = require('morgan')
//app.use(morgan('combined'))
/* 
127.0.0.1 - - [17/Nov/2022:20:07:52 +0000] "GET /livros HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
127.0.0.1 - - [17/Nov/2022:20:07:52 +0000] "GET /favicon.ico HTTP/1.1" 404 150 "http://127.0.0.1:3000/livros" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
*/
app.use(morgan('tiny'))

db.on("error", console.log.bind(console, `Erro de conexao`))
db.once("open", () => {
    console.log('Conexao com o banco realizada com sucesso')
})


const routes = require(`./routes/index`)
routes(app)

//para o axios funcionar
const cors = require('cors')
app.use(cors())


const hostname = '127.0.0.1';
const port = 3000;

const quizzes = [
    { _id: 123, title: `Quiz 1`, active: true },
    { _id: 345, title: `Quiz 2`, active: true },
    { _id: 567, title: `Quiz 3`, active: false },
]

//forma de ler JSON, configurar um middleares
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

/* app.get('/', (req, res) => {
    res.status(200).send('Servidor no ar');
})

const livros = require(`./models/Livro`)
app.get(`/livros`, (req, res) => {
    livros.find((err, livros) => {
        console.log(livros)
        res.status(200).json(livros)
    })

}) */

app.get(`/quizzes/:id`, (req, res) => {
    // mostrar req
    console.log(req.params.id)
    let quizze = quizzes.filter(i => i._id === parseInt(req.params.id))
    console.log(`teste:`, quizze)
    return res.status(200).json(quizze)

})

app.get(`/quizzes/:active`, (req, res) => {
    // mostrar req
    console.log(req.params.id)
    //res.send(quizzes.filter(i => (String(i.active).toLowerCase() === req.params.active)))
    res.send(quizzes.filter(i => (`${i.active}` == req.params.active)))
})

app.post(`/quizzes`, (req, res) => {
    const { _id, title, active } = req.body
    const quizze = { _id, title, active }
    quizzes.push(quizze)

    return res.status(201).json(quizzes)
})

// patch - atualizar parte do recuso
app.patch(`/quizzes/:id`, (req, res) => {
    const { _id, title, active } = req.body
    console.log('req.body (antes)', req.body)
    const quizze = quizzes.find(o => `${o._id}` === req.params.id);
    //console.log(quizze)

    // Não permitir que altere o id
    quizze._id = quizze._id
    quizze.title = title ? title : quizze.title
    quizze.active = active ? active : quizze.active

    return res.status(200).json(quizze)
})

// https://bobbyhadz.com/blog/javascript-remove-object-from-array-by-value#:~:text=To%20remove%20an%20object%20from,removing%20or%20replacing%20existing%20elements.
app.delete(`/quizzes/:id`, (req, res) => {
    const indexOfObject = quizzes.findIndex(o => o._id === parseInt(req.params.id));

    if (indexOfObject !== -1) {
        console.log('index object in array:', indexOfObject);

        quizzes.splice(indexOfObject, 1);
        console.log(quizzes);
    } else {
        console.log(`teste`)
        return res.status(404).json({ error: `Book doesn't exist` })
    }


    //return res.status(200).json(quizzes)


    return res.status(200).json(quizzes)
})

app.get(`/query_teste`, (req, res) => {
    // mostrar req
    res.end('Bem_Vindo: ' + req.query.nome + `; Idade: ` + req.query.idade)
})


//entregar uma porta para disponibilizar para que possamos testar
app.listen(port, hostname, () => console.log(`Server rodando!  http://${hostname}:${port}/`))
