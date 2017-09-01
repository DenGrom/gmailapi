app.service('userService', ['$http', function ($http) {

    this.addNewUser = function (user) {

        var data = user;

        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post('/Home/AddNewUser', data, config)
        .success(function (data, status, headers, config) {
            console.log(data);
            console.log(status);
            console.log(headers);
            console.log(config);
            return true;
        })
        .error(function (data, status, header, config) {
            console.log(data);
            console.log(status);
            console.log(headers);
            console.log(config);
            return false;
        });

        return false;
    }






}]);