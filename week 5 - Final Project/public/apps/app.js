var myApp=angular.module('myshopapps', ['ngRoute','ui.bootstrap']);

myApp.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when('/', {
        templateUrl: '/apps/partialViews/homepage/main.html',
        controller: 'homeCtrl'
    });
    $routeProvider.when('/login', {
        templateUrl: '/apps/partialViews/account/login.html',
        //controller: ''
    });
    $routeProvider.when('/products', {
        templateUrl: '/apps/partialViews/homepage/main.html',
        //controller: ''
    });
    $routeProvider.otherwise({redirectTo: '/404'});
    
}]);
