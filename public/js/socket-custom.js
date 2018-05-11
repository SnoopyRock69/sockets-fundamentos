var socket = io();
socket.on('connect', function() {
        console.log('Conectado con el servidor');
    })
    //Los on son para escuchar sucesos.
socket.on('disconnect', function() {
        console.log('Se perdió conexión con el servidor');
    })
    // emitir mensaje desde el cliente y que sea escuchado en el servidor
socket.emit('enviarMensaje', {
    usuario: 'Joao Camilo',
    message: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta servidor: ', resp)
})

//Escuchar información.
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});