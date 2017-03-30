/**
 * @ngdoc controller
 * @name myapp:pagesCtrl
 *
 * @description
 *
 *
 * @requires $scope
 * */

myApp.controller('pagesCtrl', function($scope){

}).controller('chatCtrl', function($scope,socket,toaster){
    $scope.messages=[];
    //$scope.messages.push({text:"hello"},{text:"hi"})
    $scope.sendMessage = function() {
        socket.emit('message',{
            text:$scope.messageText,
            profileImageURL:'http://soft-tex.com/wp/wp-content/uploads/2014/10/blank-avatar.gif',
            created:Date.now(),
            username:$scope.Username
        });
        $scope.messageText="";
    };
    socket.on('messagereceive', function (data) {
        //toaster.pop('info', "welcome", data);
        $scope.messages.unshift(data.message)
    });
});
