const mongoose = require(`mongoose`)

// 27017 é o padrao 
// remover o ?retryWrites=true&w=majority
//mongoose.connect('mongodb+srv://dcfs01:dcfs01@cluster0.px6qhss.mongodb.net/svl-node');
mongoose.connect('mongodb+srv://dcfs01:dcfs01@cluster0.px6qhss.mongodb.net/svl-node');


// testar o erro, coloquei o _ antes do @
//mongoose.connect('mongodb+srv://dcfs01:dcfs01@cluster0.px6qhss.mongodb.net/svl-node');

//local
//mongoose.connect('mongodb://mongodb0.example.com:27017');

let db = mongoose.connection;

module.exports = db 
