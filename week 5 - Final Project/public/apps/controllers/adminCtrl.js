/**
 * @ngdoc controller
 * @name myapp:adminCtrl
 *
 * @description
 *
 *
 * @requires $scope
 * */
myApp.controller('adminCtrl', function($scope,$http){


}).controller('brandManagementCtrl', function($scope,$http){
    $scope.saveBrand=function(isValid) {
        console.log($scope.brandlogo);
        if (isValid) {
            $http.post('/api/brand/', {}).then(function (result) {

            });
        }
    }
}).controller('productManagementCtrl', function($scope,$http){
    $scope.variantinputs = [{'key':"",value:""}];
    $scope.addvariantfield=function(){
        $scope.variantinputs.push({'key':"",value:""})
    };
    $scope.removeChoice = function() {
        var lastItem = $scope.variantinputs.length-1;
        $scope.variantinputs.splice(lastItem);
    };
    $scope.saveProduct=function(isValid) {
        if (isValid) {
            $http.post('/api/product/', {}).then(function (result) {

            });
        }
    }
}).controller('categoryManagementCtrl', function($scope,$http){
    $scope.saveCategory=function(isValid) {
        if (isValid) {
            $http.post('/api/category/', {}).then(function (result) {

            });
        }
    }
});
