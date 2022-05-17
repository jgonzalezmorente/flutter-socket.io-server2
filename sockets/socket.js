const { io } = require('../index');

console.log('socket.js');
// Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado');

    client.on('mensaje', ( payload ) => {
        console.log('Mensaje', payload );
        io.emit('mensaje', { admin: 'Nuevo mensaje' });
    });

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
});
