angular.module('baseapolo')
    .config(
        function ($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {
            console.log("home route");
            
            $stateProvider
                .state('root.home', {
                    url: '/',
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
                            templateUrl: './app/components/home/views/register.html'
                        }
                    }
                })
        });
