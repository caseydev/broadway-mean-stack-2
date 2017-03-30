/**
 * @ngdoc service
 * @name myapp:socketFactory
 *
 * @description
 *
 *
 * */
myApp.factory('socket', function(socketFactory){
    var socket = socketFactory();
    socket.forward('broadcast');
    return socket;
});
