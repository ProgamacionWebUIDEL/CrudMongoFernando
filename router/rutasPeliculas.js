const express = require('express'),
    router=express.Router(),
    pelicula=require('../controllers/controllerPelicula');


router.use('/peliculas', pelicula);

module.exports=router;