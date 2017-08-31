app.controller('userController', ['$http', '$scope', 'userService', function ($http, $scope, userService) {


    $scope.addUser = function () {
        
    }

    $scope.user.firstName = "Alex";
    $scope.user.lastName = "Bordov";
    $scope.user.email = "alexbordov1@gmail.com";
    $scope.user.imageUrl = "https://lh4.googleusercontent.com/-5Y__F7y9tT8/AAAAAAAAAAI/AAAAAAAAAAA/APJypA0c8GceAD1En_08aa9B9Db6-nzfvg/s96-c/photo.jpg";

}]);