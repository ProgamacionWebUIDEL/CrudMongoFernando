var mongoose = require('mongoose'); //importamos mongoose 

var connection = mongoose.connect("mongodb+srv://fernando:1105108904@cluster0.qx5xa.mongodb.net/sistema?retryWrites=true&w=majority"); // nos conectamos
//var connection = mongoose.connect("mongodb+srv://ymtorresb:iJwkkLVzpwjVliNg@cluster0.2a68v.mongodb.net/Sistema?retryWrites=true&w=majority");

// establecemos la conexion

mongoose.connection.on('open',(ref)=>{
    console.log("conectado a mongodb");

});

module.exports=connection;