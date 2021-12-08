//importamos
var mongoose = require('mongoose');

Schema=mongoose.Schema; //importamos un squema que permite mapear a archivos

var peliculaSchema = new mongoose.Schema({      //esquema 

    nombre: {type: String},
    director: {type: String},
    anioEstreno: {type: Number},
    idioma: {type: String},
    duracion: {type: String}


});

var pelicula= mongoose.model('pelicula', peliculaSchema);   //trabajara con el esquema pelicula

module.exports=pelicula;