angular.module('baseapolo').controller('registerCtrl', function ($scope, userAPI, $state) {
    $scope.user = {};
    $scope.error = '';
    $scope.success = '';
    
    $scope.register = function () {
        console.log("Sending register request");
        var response = userAPI.register($scope.user);
        response.then(function success(response) {
            var
                data = response.data,
                status = response.status;
            if (status == 200 && !data.errors) {
                    $state.transitionTo('root.home');
                    $scope.success = 'Seu cadastro foi realizado com sucesso';
            } else {
                $scope.error = "Um erro ocorreu ao fazer o seu cadastro";
            }
        });
    };
    
    console.log("registerCtrl");
});
