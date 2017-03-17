var app=angular.module('myApps', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider){

    $routeProvider.when('/aboutus', {
        templateUrl: 'partialView/AboutUs.html',
        controller: 'AboutUsCtrl'
    });
    $routeProvider.when('/', {
        templateUrl: 'partialView/Home.html',
        controller: 'homeController'
    });
    $routeProvider.when('/users', {
        templateUrl: 'partialView/Users.html',
        controller: 'UsersCtrl'
    });
    $routeProvider.when('/contactus', {
        templateUrl: 'partialView/ContactUs.html',
        controller: 'ContactUsCtrl'
    });
    $routeProvider.when('/gallery', {
        templateUrl: 'partialView/photogallery.html',
        controller: 'photogalleryCtrl'
    });
    $routeProvider.otherwise({redirectTo: '/'});

}]);
