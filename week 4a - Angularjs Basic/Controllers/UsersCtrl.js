/**
 * @ngdoc controller
 * @name myapp:UsersCtrl
 *
 * @description
 *
 *
 * @requires $scope
 * */
app.controller('UsersCtrl', function($scope,$http){
  var url="https://jsonplaceholder.typicode.com/users";
   $http.get(url).then(function(result){
       console.log('data',result)
       $scope.userList=result.data;
   });

});
