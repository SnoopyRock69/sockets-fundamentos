const express = require('express');
//Requerimos el paquete de socket.io
const socketIo = require('socket.io');
const http = require('http');
const path = require('path');
const app = express();
//Creamos el servidor
let server = http.createServer(app);
//Compartir y hacer público el path.
const publicPath = path.resolve(__dirname, '../public');
//Definir puerto de conexión
const port = process.env.PORT || 3000;
//Usar middleware para habilitar carpeta pública.
app.use(express.static(publicPath));
//Esta es la comunicación del backend.
module.exports.io = socketIo(server);
require('./sockets/socket');
//Aplicación escuchando el puerto 3000 o el asignado por heroku
server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en el puerto ${ port }`);
});