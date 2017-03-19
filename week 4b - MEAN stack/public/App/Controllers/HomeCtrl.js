/**
 * @ngdoc controller
 * @name myapps:HomeCtrl
 *
 * @description
 *
 *
 * @requires $scope
 * */
apps.controller('HomeCtrl', function($scope,$http){
  $scope.title="Home Page";
  $http.get("http://localhost:3000/api/product/").then(function(result){
    $scope.ProductList=result.data.products;
  });
});
