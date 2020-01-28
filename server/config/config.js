process.env.PORT = process.env.PORT || 3000;
//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//Conecciona  a la base de datos
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/usuarios';
} else {
    urlDB = 'mongodb+srv://user:pDIn1JjsHn3v9nxD@cluster0-fh2p2.mongodb.net/Libreria'
}
process.env.URLDB = urlDB;