app.service('homeService', ['$http', function($http) {
    this.getInformationsFromService = function () {
        var resp = $http({
            method: "get",
            url: '/Home/GetInformations',
        });
        console.log(resp);
    return resp;
    }
}]);