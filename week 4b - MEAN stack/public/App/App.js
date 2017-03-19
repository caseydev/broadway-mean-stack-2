var apps=angular.module('meanApps', ['ngRoute']);

apps.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');

    $routeProvider.when('/', {
        templateUrl: '../App/partialViews/Home/home.html',
        controller: 'HomeCtrl'
    });

    $routeProvider.when('/aboutus', {
        templateUrl: '../App/partialViews/Home/aboutus.html',
        controller: 'AboutUsCtrl'
    });
    $routeProvider.when('/contactus', {
        templateUrl: '../App/partialViews/Home/contact.html',
        controller: 'contactusCtrl'
    });
    $routeProvider.when('/login', {
        templateUrl: '../App/partialViews/Home/login.html',
        controller: 'loginCtrl'
    });
    $routeProvider.when('/signup', {
        templateUrl: '../App/partialViews/Home/signup.html',
      //  controller: 'loginCtrl'
    });
    $routeProvider.when('/service', {
        templateUrl: '../App/partialViews/Home/service.html',
        controller: 'serviceCtrl'
    });
    $routeProvider.when('/Product', {
        templateUrl: '../App/partialViews/Product/index.html',
      //  controller: 'ProductCtrl'
    });
    $routeProvider.when('/Product/Create', {
        templateUrl: '../App/partialViews/Product/create.html',
      //  controller: 'ProductCtrl'
    });
}]);
