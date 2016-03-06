angular.module('baseapolo')
    .config(
        function ($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider, authProvider) {
            console.log("route base");
            
            // console.log(auth);
            
            function getNavBarTemplateUrl() {
                if (authProvider.isAuthenticated()) {
                    return './app/shared/navbar/views/userNavbar.html';
                } else {
                    return './app/shared/navbar/views/nonUserNavbar.html';
                }
            }
            
            // For any unmatched url, send to /
            $urlRouterProvider.otherwise("/");

            // Treats url and url/ as the same, so when the server returns
            // server.yoururl/ it will match the yoururl and not the yoururl/{something}
            $urlMatcherFactoryProvider.strictMode(false);

            $stateProvider
                .state('root', {
                    url: '',
                    abstract: true,
                    views: {
                        'navbar': {
                            templateUrl: getNavBarTemplateUrl(),
                            controller: 'navbarCtrl'
                        },
                        'footer': {
                            templateUrl: './app/shared/footer/views/footer.html'
                        }
                    }
                })

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        })
    .run(["$rootScope", "$anchorScroll", function ($rootScope, $anchorScroll) {
        $rootScope.$on("$locationChangeSuccess", function () {
            $anchorScroll();
        });
    }]);

