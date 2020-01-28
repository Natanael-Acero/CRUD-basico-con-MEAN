const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


let Schema = mongoose.Schema;

let usuarioSchema = new Schema({

    nombre: {
        type: String,
        require: [true, "Porfavor inserta el nombre"]
    },
    apellidoMaterno: {
        type: String,
        require: [true, "Favor de insertar el apellido materno"]
    },
    apellidoPaterno: {
        type: String,
        require: [true, "Favor de insertar el apellido paterno"]
    },
    correo: {
        type: String,
        unique: true,
        require: [true, "Favor de insertar su correo electronico"]
    },
    contraseña: {
        type: String,
        require: [true, "Favor de insertar tu contraseña"]
    },
    direccion: {
        type: String,
        require: [true, "Favor de insertar tu direccion"]
    },
    colonia: {
        type: String,
        require: [true, "Favor de insertar tu colonia"]
    },
    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);