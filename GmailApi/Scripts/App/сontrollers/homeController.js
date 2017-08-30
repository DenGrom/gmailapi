app.controller('homeController', ["$http", "$scope", "homeService", function ($http, $scope, homeService) {

    $scope.getInformations = function () {
        homeService.getInformationsFromService().then(function (success) {
            console.log(success);
            $scope.Labels = success.data.Labels;
            $scope.Messages = success.data.Messages;
            console.log(success.data.Messages);
        });
    };


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