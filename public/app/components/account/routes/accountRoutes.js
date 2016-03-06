angular.module('baseapolo')
    .config(
        function ($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider, authProvider) {
            console.log("account route");
            var url = '/account';
            
            $urlRouterProvider.when(url, function($state) {
                // If the user is not authenticated, redirect to home
                if (!authProvider.isAuthenticated()) {
                    $state.transitionTo('root.home');
                    return true;
                }
                return false;
            });
            
            $stateProvider
                .state('root.account', {
                    url: url,
                    views: {
                        '@': {
                            templateUrl: './app/components/account/views/account.html',
                            controller: 'accountCtrl'
                        },
                        'user@root.account': {
                            templateUrl: './app/components/account/views/user.html',
                        },
                        'stars@root.account': {
                            templateUrl: './app/components/account/views/stars.html',
                        },
                        'creations@root.account': {
                            templateUrl: './app/components/account/views/creations.html',
                        }
                    }
                })
        });
