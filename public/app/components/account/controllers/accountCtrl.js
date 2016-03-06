angular.module('baseapolo').controller('accountCtrl', function ($scope, userAPI) {
    
    $scope.user = userAPI.getUserData();
    
    console.log("accountCtrl");
});
