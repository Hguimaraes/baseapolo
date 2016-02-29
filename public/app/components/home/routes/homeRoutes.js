angular.module('baseapolo')
    .config(
        function ($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider, authProvider) {
            console.log("home route");
            var url = '/';
            
            $urlRouterProvider.when(url, function($state) {
                // If the user is authenticated, redirect to user home
                if (authProvider.isLoggedIn()) {
                    $state.transitionTo('root.userHome');
                    return true;
                }
                return false;
            });
            
            $stateProvider
                .state('root.home', {
                    url: url,
                    controller: 'homeCtrl',
                    views: {
                        '@': {
                            templateUrl: './app/components/home/views/home.html'
                        },
                        'top@root.home': {
                            templateUrl: './app/components/home/views/top.html'
                        },
                        'about@root.home': {
                            templateUrl: './app/components/home/views/about.html'
                        },
                        'register@root.home': {
                            templateUrl: './app/components/register/views/register.html'
                        }
                    }
                })
        });
