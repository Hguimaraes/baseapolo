angular.module('baseapolo')
    .config(
        function ($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider, authProvider) {
            console.log("register route");
            
            var url = '/register';
            
            $urlRouterProvider.when(url, function($state) {
                // If the user is authenticated, redirect to home
                if (authProvider.isLoggedIn()) {
                    $state.transitionTo('root.home');
                    return true;
                }
                return false;
            });
            
            $stateProvider
                .state('root.register', {
                    url: url,
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
