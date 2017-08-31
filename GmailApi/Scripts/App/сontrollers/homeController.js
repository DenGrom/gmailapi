app.controller('homeController', ["$http", "$scope", "homeService", function ($http, $scope, homeService) {

    $scope.isSignIn = false;
    console.log($scope.isSignIn);
    $scope.getInformations = function () {
        homeService.getInformationsFromService().then(function (success) {
            console.log(success);
            $scope.Labels = success.data.Labels;
            $scope.Messages = success.data.Messages;
            console.log(success.data.Messages);
        });
    };

    $scope.$on('event:google-plus-signin-success', function (event, authResult) {
        // Send login to server or save into cookie
        console.log(event);
        console.log(authResult.w3.U3);
        if (authResult.w3.U3)
        {
            $scope.isSignIn = true;
            console.log($scope.isSignIn);
            $scope.$digest();
        }
    });
    $scope.$on('event:google-plus-signin-failure', function (event, authResult) {
        // Auth failure or signout detected
    });
    //    $scope.getInformations = function () {

    //    $http({
    //        method: 'GET',
    //        url: '/Home/GetInformations'
    //    }).then(function (success){
    //        console.log(success);
    //        $scope.Labels = success.data.Labels;
    //        $scope.Messages = success.data.Messages;
    //        console.log(success.data.Messages);
    //    },function (error){

    //    });
    //}


}]);