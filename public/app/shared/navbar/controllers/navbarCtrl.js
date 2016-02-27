angular.module('baseapolo').controller('navbarCtrl', function ($scope, $state) {

    console.log("navbarCtrl");
    
    $scope.state = {
        isHome: function() {return $state.is('root.home')},
        isLogin: function() {return $state.is('root.login')}
    }
});
