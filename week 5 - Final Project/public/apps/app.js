var myApp=angular.module('myshopapps', ['ngRoute','ui.bootstrap']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: '',
        controller: ''
    });
    $routeProvider.otherwise({redirectTo: '/4o4'});
    
}]);
