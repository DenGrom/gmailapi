app.service('userService', ['$http', function ($http) {

    this.addNewUser = function (user) {
        var data = user;
        var resp = $http.post('/Home/AddNewUser', data);
        return resp;
    }
}]);