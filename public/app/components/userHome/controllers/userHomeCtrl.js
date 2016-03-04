angular.module('baseapolo').controller('userHomeCtrl', function ($scope, user) {

    $scope.handleStar = function() {
        console.log("Star");
    }
    console.log("userHomeCtrl");
});
