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
angular.module('ngMaterialize').directive('dropdown-button', function ($timeout) {
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
});
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
angular.module('ngMaterialize').directive('scrollspy', function ($timeout) {
  return {
    template: "",
    restrict: 'C',
    link: function postLink($scope, elem, attrs) {
      $timeout(function () {
        $('.scrollspy').scrollSpy();
      }, 0);
    }
  };
});
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
angular.module('ngMaterialize').directive('select', function ($timeout) {
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
});
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