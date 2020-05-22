let socketConfig = {};

socketConfig.configure = (io) => {
    //aqui se configura socket.io

    //manejar evento de 'connection'
    io.on('connection', (socket) => {
        //socket nos permite manipular la conexion entablada
        console.log("User connected");

        socket.on('message.new', (message) => {
            console.log("message", message);
            //emitir un evento a todos los clientes conectados
            io.emit('message.received', message);
        });
    });
};

module.exports = socketConfig;