const express = require("express");

const app = express();

app.get("/hola", (req, res)=>{

    var datos = req.query;
    res.json({message : "hola men --> "+datos.nombre});
});

app.get("/suma", (req, res)=>{

    var datos = req.query;
    var suma = Number(datos.n1)+Number(datos.n2);
    res.json({message : "la respuesta es --> "+suma});
});

app.get("/resta", (req, res)=>{

    var datos = req.query;
    var resta = Number(datos.n1)-Number(datos.n2);
    res.json({message : "la respuesta es --> "+resta});
});

app.get("/multiplicacion", (req, res)=>{

    var datos = req.query;
    var multiplicacion = Number(datos.n1)*Number(datos.n2);
    res.json({message : "la respuesta es --> "+multiplicacion});
});

app.get("/division", (req, res)=>{

    var datos = req.query;
    var division = Number(datos.n1)/Number(datos.n2);
    res.json({message : "la respuesta es --> "+division});
});

app.get("/exponencial", (req, res)=>{

    var datos = req.query;
    var exponencial = Number(datos.n1)**Number(datos.n2);
    res.json({message : "la respuesta es --> "+exponencial});
});

app.listen(3000, ()=>{
    console.log("servidor levantado");
});