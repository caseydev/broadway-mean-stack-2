/**
 * @ngdoc controller
 * @name myapp:adminCtrl
 *
 * @description
 *
 *
 * @requires $scope
 * */
myApp
    .controller('adminCtrl', function($scope,$http){
    $scope.saveBrand=function(isValid) {
       console.log($scope.brandlogo);
        if (isValid) {
            $http.post('/api/brand/', {}).then(function (result) {

            })
        }
    }
});
