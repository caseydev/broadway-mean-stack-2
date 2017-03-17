/**
 * @ngdoc controller
 * @name myapp:photogalleryCtrl
 *
 * @description
 *
 *
 * @requires $scope
 * */
app
    .controller('photogalleryCtrl', function($scope,$http){
        var url="https://jsonplaceholder.typicode.com/photos";
        $http.get(url).then(function(result){
            console.log('data',result)
            $scope.photoList=result.data;
        });
});
