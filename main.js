const express = require("express");

const app = express();

app.get("/hola", (req, res)=>{

    var datos = req.query;
    res.json({message : "hola men --> "+datos.nombre});
});

app.get("/suma", (req, res)=>{

    var datos = req.query;
    var suma = Number(datos.n1)**Number(datos.n2);
    res.json({message : "la respuesta es --> "+suma});
});

app.listen(3000, ()=>{
    console.log("servidor levantado");
});