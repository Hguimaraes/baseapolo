angular.module('baseapolo', [
	'ui.router',
    'ngMaterialize'])
angular.module('baseapolo')
    .config(
        ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$urlMatcherFactoryProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {
            console.log("route base");
            
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
                            templateUrl: './app/shared/navbar/views/navbar.html',
                            controller: 'navbarCtrl'
                        }
                    }
                })

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }]);

angular.module('ngMaterialize', []);

angular.module('ngMaterialize').directive('slider', function () {
  return {
    template: "",
    restrict: 'C',
    scope: {
      reloadWatch: '='
    },
    link: function postLink(scope, elem, attrs) {
      scope.$watch('reloadWatch', function(new_value, old_value) {
        $(elem).slider({
          full_width: true,
          height: '100%'
        });
      });

      $(elem).slider({
        full_width: true,
        height: '100%'
      });
    }
  };
});
angular.module('ngMaterialize').directive('dropdown-button', ['$timeout', function ($timeout) {
  return {
    template: "",
    restrict: 'C',
    scope: {},
    link: function postLink($scope, elem, attrs) {
      $timeout(function () {
        $(elem).dropdown();
      });
    }
  };
}]);
angular.module('ngMaterialize').directive('collapsible', function () {
  return {
    template: "",
    restrict: 'C',
    scope: {},
    link: function postLink($scope, elem, attrs) {
      $(elem).collapsible({
        //          accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    }
  };
});
angular.module('ngMaterialize').directive('parallax', function () {
  return {
    template: "",
    restrict: 'C',
    scope: {},
    link: function postLink($scope, elem, attrs) {
      $('.parallax').parallax();
    }
  };
});
angular.module('ngMaterialize').directive('scrollspy', ['$timeout', function ($timeout) {
  return {
    template: "",
    restrict: 'C',
    link: function postLink($scope, elem, attrs) {
      $timeout(function () {
        $('.scrollspy').scrollSpy();
      }, 0);
    }
  };
}]);
angular.module('ngMaterialize').directive('materialboxed', function () {
  return {
    template: "",
    restrict: 'C',
    scope: {},
    link: function postLink($scope, elem, attrs) {
      $(elem).materialbox();
    }
  };
});
angular.module('ngMaterialize').directive('select', ['$timeout', function ($timeout) {
  return {
    template: "",
    restrict: 'E',
    scope: {},
    link: function postLink($scope, elem, attrs) {
      $timeout(function() {
        $(elem).material_select();
      }, 0);
    }
  };
}]);
angular.module('ngMaterialize').directive('tabs', function () {
  return {
    template: "",
    restrict: 'C',
    scope: {},
    link: function postLink($scope, elem, attrs) {
      $(elem).tabs();
    }
  };
});
angular.module('ngMaterialize').directive('nav', function () {
  return {
    template: "",
    restrict: 'E',
    link: function postLink($scope, elem, attrs) {
      if (attrs.closeOnClick == undefined) {
        attrs.closeOnClick = true;
      }
      $(elem[0].querySelector('.button-collapse')).sideNav({
        closeOnClick: attrs.closeOnClick
      });
    }
  };
});
'use strict';

angular.module('baseapolo').controller('courseCtrl',
    ['$scope', '$location', function ($scope, $location) {

        $scope.courses = [
            'Engenharia Ambiental',
            'Engenharia Civil',
            'Engenharia-Básico',
            'Engenharia de Computação e Informação',
            'Engenharia de Controle e Automação',
            'Engenharia de Materiais',
            'Engenharia de Petróleo',
            'Engenharia de Produção',
            'Engenharia Eletrônica e de Computação',
            'Engenharia Elétrica',
            'Engenharia Mecânica',
            'Engenharia Metalúrgica',
            'Engenharia Naval e Oceânica',
            'Engenharia Nuclear'];

        $scope.course = $scope.courses[0];

        $scope.update = function (item) {
            $scope.course = item;
        }
        console.log("courseCtrl");
    }]);

angular.module('baseapolo').controller('homeCtrl', ['$scope', function ($scope) {

    console.log("homeCtrl");
}]);

angular.module('baseapolo')
    .config(
        ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$urlMatcherFactoryProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {
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
        }]);

angular.module('baseapolo')
    .config(
        ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$urlMatcherFactoryProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {
            console.log("login route");

            $stateProvider
                .state('root.login', {
                    url: '/login',
                    views: {
                        '@': {
                            templateUrl: './app/components/login/views/login.html'
                        }
                    }
                })
        }]);

angular.module('baseapolo').controller('navbarCtrl', ['$scope', '$state', function ($scope, $state) {

    console.log("navbarCtrl");
    
    $scope.state = {
        isHome: function() {return $state.is('root.home')},
        isLogin: function() {return $state.is('root.login')}
    }
}]);
