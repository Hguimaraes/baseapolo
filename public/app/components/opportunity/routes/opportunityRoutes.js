angular.module('baseapolo')
    .config(
        function ($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider, authProvider) {
            console.log("opportunity details route");

            var url = '/{id}';

            $urlRouterProvider.when(url, function ($state) {
                // If the user is not authenticated, redirect to home
                if (!authProvider.isAuthenticated()) {
                    $state.transitionTo('root.home');
                    return true;
                }
                return false;
            });

            $stateProvider
                .state('root.opportunity.details', {
                    url: url,
                    views: {
                        '@': {
                            templateUrl: './app/components/opportunity/views/opportunity.html',
                            controller: 'opportunityCtrl'
                        }
                    }
                })
        });
