const { io } = require('../server');

//Saber cuándo un usuario se conecta
io.on('connection', (client) => {
    console.log('Usuario conectado');

    //Emitir mensaje para que el cliente escuche
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        message: 'Bienvenido a esta aplicación.'
    });

    //Saber cuándo el cliente se desconecta.
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar al cliente. Escucho el evento y recibo el mensaje.
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        //Se responde a todos.
        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: ' TODO SALIÓ BIEN'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIÓ MAL'
        //     });
        // }



    })
})