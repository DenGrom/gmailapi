app.service('homeService', ['$http', function($http) {
    this.getInformationsFromService = function () {
        //$http({
        //    method: 'GET',
        //    url: '/Home/GetInformations'
        //}).then(function (success) {
        //    console.log(success);
        //    return success;
        //}, function (error) {

        //});

        var resp = $http({
            method: "get",
            url: '/Home/GetInformations',
        });
        console.log(resp);
    return resp;


    }
}]);