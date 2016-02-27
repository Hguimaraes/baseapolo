angular.module('baseapolo')
    .config(
        function ($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {
            console.log("route base");
            
            // For any unmatched url, send to /
            $urlRouterProvider.otherwise("/");

            // Treats url and url/ as the same, so when the server returns
            // server.yoururl/ it will match the yoururl and not the yoururl/{something}
            $urlMatcherFactoryProvider.strictMode(false);

            $stateProvider
                .state('root', {
                    url: '',
                    abstract: true,
                    views: {
                        'navbar': {
                            templateUrl: './app/shared/navbar/views/navbar.html',
                            controller: 'navbarCtrl'
                        }
                    }
                })

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        });
