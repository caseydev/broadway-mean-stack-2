/**
 * @ngdoc controller
 * @name myapp:homeCtrl
 *
 * @description
 *
 *
 * @requires $scope
 * */
myApp.controller('homeCtrl', function($scope,$http,socket,toaster){
 $scope.title="HomePage";
    var brandApiUrl='/api/brand/';
    $http.get(brandApiUrl).then(function(result){
    $scope.brandList=result.data;
    // console.log(result);
     });
    socket.on('welcome', function (data) {
        toaster.pop('info',data.title, data.message);
    });

    var newArrivalApiUrl='/api/product/newProduct';
    $http.get(newArrivalApiUrl).then(function(result){
        $scope.newArrivalList=result.data;
        console.log(result);
    })
});
