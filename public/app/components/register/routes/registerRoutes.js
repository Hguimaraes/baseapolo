angular.module('baseapolo')
    .config(
        function ($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {
            console.log("register route");
            
            $stateProvider
                .state('root.register', {
                    url: '/register',
                    controller: 'registerCtrl',
                    views: {
                        '@': {
                            templateUrl: './app/components/register/views/register.html'
                        },
                        'footer@': {
                            template: ''
                        }
                    }
                })
        });
