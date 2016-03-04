angular.module('baseapolo').controller('navbarCtrl', function ($scope, $state, userAPI) {

    console.log("navbarCtrl");

    $scope.user = userAPI;

    $scope.state = {
        isHome: function () { return $state.is('root.home') },
        isLogin: function () { return $state.is('root.login') }
    }
});
