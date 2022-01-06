// importamos 
var mongoose = require('mongoose');

Schema=mongoose.Schema; // importamos un esquema que permite mapear los archivos

var serieSchema = new mongoose.Schema({

    nombre: {type: String},
    numTemporadas: {type: String},
    director: {type: String},
    idioma: {type: String},
    anioEstreno: {type: String},
    descripcion: {type: String}

});

var serie=mongoose.model('serie', serieSchema);

module.exports=serie;