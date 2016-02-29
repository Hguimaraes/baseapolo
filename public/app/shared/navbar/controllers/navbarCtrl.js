angular.module('baseapolo').controller('navbarCtrl', function ($scope, $state, user) {

    console.log("navbarCtrl");

    console.log('user = ' + user);

    $scope.state = {
        isHome: function () { return $state.is('root.home') },
        isLogin: function () { return $state.is('root.login') },
        isLoggedIn: function () { return !!user }
    }
});
