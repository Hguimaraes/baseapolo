angular.module('baseapolo')
    .config(
        function ($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider, authProvider) {
            console.log("user home route");
            
            var url = '/';
            
            $urlRouterProvider.when(url, function($state) {
                // If the user is not authenticated, redirect to home
                if (!authProvider.isLoggedIn()) {
                    $state.transitionTo('root.home');
                    return true;
                }
                return false;
            });
            
            $stateProvider
                .state('root.userHome', {
                    url: url,
                    controller: 'userHomeCtrl',
                    views: {
                        '@': {
                            templateUrl: './app/components/userHome/views/userHome.html'
                        }
                    }
                })
        });
