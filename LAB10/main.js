'use strict'
const express = require('express');
const app = express();
const path= require('path');
const bodyParser = require('body-parser');
//########################## GET ###################################
//localhost:3000/hola
app.get('/hola', function(req,res){
	res.sendFile(path.join(__dirname + '/index.html'));
});


//Activar el puerto de escucha
app.listen(8080, function() {
    console.log('Servidor en ejecución en el puerto 8080');
});