const mongoose = require(`mongoose`)

// 27017 é o padrao 
// remover o ?retryWrites=true&w=majority
//mongoose.connect('mongodb+srv://dcfs01:dcfs01@cluster0.px6qhss.mongodb.net/svl-node');
//mongoose.connect('mongodb+srv://dcfs01:dcfs01@cluster0.px6qhss.mongodb.net/svl-node');


// testar o erro, coloquei o _ antes do @
//mongoose.connect('mongodb+srv://dcfs01:dcfs01@cluster0.px6qhss.mongodb.net/svl-node');

mongoose.connect(`mongodb+srv://fs12:fs12@svl-api.rp9scq4.mongodb.net/svl-bd`)

//local
//mongoose.connect("mongodb://127.0.0.1:27017/books");

let db = mongoose.connection;

module.exports = db 
