angular.module('baseapolo')
    .config(
        function ($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider, authProvider) {
            console.log("opportunity route");

            var url = '/opportunity';

            $urlRouterProvider.when(url, function ($state) {
                // If the user is not authenticated, redirect to home
                if (!authProvider.isAuthenticated()) {
                    $state.transitionTo('root.home');
                    return true;
                }
                return false;
            });

            $stateProvider
                .state('root.newopportunity', {
                    url: url,
                    views: {
                        '@': {
                            templateUrl: './app/components/newOpportunity/views/newOpportunity.html',
                            controller: 'newOpportunityCtrl'
                        },
                        'categories@root.newopportunity': {
                            templateUrl: './app/components/newOpportunity/views/categories.html'
                        }
                    }
                })
        });
