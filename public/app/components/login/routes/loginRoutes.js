angular.module('baseapolo')
    .config(
        function ($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {
            console.log("login route");

            $stateProvider
                .state('root.login', {
                    url: '/login',
                    views: {
                        '@': {
                            templateUrl: './app/components/login/views/login.html'
                        }
                    }
                })
        });
