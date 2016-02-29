angular.module('baseapolo')
    .config(
        function ($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider, authProvider) {
            console.log("account route");
            var url = '/account';
            
            $urlRouterProvider.when(url, function($state) {
                // If the user is not authenticated, redirect to home
                if (!authProvider.isLoggedIn()) {
                    $state.transitionTo('root.home');
                    return true;
                }
                return false;
            });
            
            $stateProvider
                .state('root.account', {
                    url: url,
                    controller: 'accountCtrl',
                    views: {
                        '@': {
                            templateUrl: './app/components/account/views/account.html'
                        }
                    }
                })
        });
