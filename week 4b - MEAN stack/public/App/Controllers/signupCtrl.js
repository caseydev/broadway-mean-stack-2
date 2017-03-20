apps.controller('signUpCtrl', function($scope,$http){
$scope.title="register user";
var url='http://localhost:3000/api/home/signup'
$scope.submitForm=function(){
  var newUser={
    firstname:$scope.firstname,
    lastname:$scope.lastname,
    address:$scope.address,
    username:$scope.username,
    email:$scope.email,
    password:$scope.password
  }
  //console.log('newUser',newUser)
  $http.post(url,newUser).then(function(result){
    console.log(result);
    });
};


});
