var Pelicula = require('../models/peliculas'),
    express = require('express'),
    router = express.Router();

router.post('/', (req, res) => {       //metodo post

    Pelicula.find({}, (err, docs) => {
        //console.log(req);
        if (err) {
            console.log(err);
            throw err;
        }
        res.status(200).json(docs)
    });
});

//creamos el metodo de post

router.post('/crearPelicula', (req, res) => {
    var body = req.body;
    Pelicula.insertMany({
        nombre: body.nombre,
        director: body.director,
        anioEstreno: body.anioEstreno,
        idioma: body.idioma,
        duracion: body.duracion
    }, (err, rest) => {
        if (err) {
            console.log(err);
            throw err;
        }
        res.status(200).json(rest)
    });
});

// metodo de eliminar peliculas

router.post('/eliminarPelicula', (req, res) => {
    Pelicula.remove({
        nombre: req.body.nombre,
    }, (err, rest) => {
        if (err) {
            console.log(err);
            throw err;
        }
        res.status(200).json(rest)
    });
});

// metodo de editar

router.post('/editarPelicula', (req, res) => {
    var body = req.body;
    Pelicula.updateMany({
        nombre: body.nombre
    }, {
        $set: {
            nombre: body.nombre,
            director: body.director,
            anioEstreno: body.anioEstreno,
            idioma: body.idioma,
            duracion: body.duracion
        }


    }, (err, rest) => {
        if (err) {
            console.log(err);
            throw err;
        }
        res.status(200).json(rest)
    });

});

module.exports = router;