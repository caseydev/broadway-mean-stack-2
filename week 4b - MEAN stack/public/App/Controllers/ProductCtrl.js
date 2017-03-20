/**
 * @ngdoc controller
 * @name myapp:ProductCtrl
 *
 * @description
 *
 *
 * @requires $scope
 * */
apps.controller('ProductCtrl', function($scope,$http){
        $scope.title="Product";
        $http.get("http://localhost:3000/api/product/").then(function(result){
            $scope.ProductList=result.data.products;
        });
}).controller('ProductDetails', function($scope,$routeParams,$http){
    $scope.title="Details";
    $http.get("http://localhost:3000/api/product/details/" + $routeParams.id).then(function(result){
        $scope.product=result.data.product;
    });
});
