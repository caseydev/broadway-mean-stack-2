module.exports = function (io) {
    io.on('connection', function (socket) {
        socket.emit('welcome', {title:"Welcome", message: 'Welcome to Mean Mart' });
        // socket.on('thanks', function (data) {
        //     console.log(data);
        //     io.emit('notification', { for: 'everyone' });
        //    socket.broadcast.emit('notification', { for: 'other' });
        // });
        socket.on('message', function (data) {
            io.emit('messagereceive', { message: data });
           // socket.broadcast.emit('notification', { for: 'other' });
        });
         socket.on('disconnect', function () {
             console.log('user disconnected');
             io.emit('userdisconnected');
         });
    });
};
