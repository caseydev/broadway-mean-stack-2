/**
 * @ngdoc service
 * @name myapps:brand
 *
 * @description
 *
 *
 * */
myApp.service('brand', function($http){

    this.getBrands = function() {
        var brandApiUrl='/api/brand/';
        $http.get(url).then(function(result){
            return result;
        })
    };

});

