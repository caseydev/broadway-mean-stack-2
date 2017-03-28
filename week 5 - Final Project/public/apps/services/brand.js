/**
 * @ngdoc service
 * @name myapps:brand
 *
 * @description
 *
 *
 * */
myApp.service('Brand', function($http){

    this.getBrands = function() {
       return $http.get('/api/brand/');
    };
    this.getBrand = function(id)  {
        return $http.get('/api/brand/' + id);
    };
    this.createBrand = function(brandObj)  {
        return $http.post('/api/brand/', brandObj);
    };
    this.editBrand = function(editedbrandObj)  {
        return $http.put('/api/brand/', editedbrandObj);
    }
});

