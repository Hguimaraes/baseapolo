angular.module('baseapolo')
    .config(
        function ($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider, authProvider) {
            console.log("register route");
            
            var url = '/register';
            
            $urlRouterProvider.when(url, function($state) {
                // If the user is authenticated, redirect to home
                if (authProvider.isAuthenticated()) {
                    $state.transitionTo('root.userHome');
                    return true;
                }
                return false;
            });
            
            $stateProvider
                .state('root.register', {
                    url: url,
                    views: {
                        '@': {
                            templateUrl: './app/components/register/views/register.html',
                            controller: 'registerCtrl'
                        },
                        'footer@': {
                            template: ''
                        }
                    }
                })
        });
