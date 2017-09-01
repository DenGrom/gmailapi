app.controller('userController', ['$http', '$scope', 'userService', function ($http, $scope, userService) {

    //$scope.user = "User";
    $scope.addUser = function () {
        var user = new User($scope.firstName, $scope.lastName, $scope.email);
        console.log(user);
        userService.addNewUser(user).then(function (success) {
            console.log(success);
        });
    }
}]);