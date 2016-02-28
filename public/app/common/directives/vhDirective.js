angular.module('vh', [])
  .directive('vh', function ($window) {
    return {
      template: "",
      restrict: 'A',
      controller: function ($window) {
        this.target = '';
        this.height = '';
        this.orientation = 0;

        this.resize = function () {
          var new_height = this.height / 100.0 * $window.innerHeight;
          this.target.css('min-height', new_height);
        };
      },

      link: function postLink(scope, elem, attrs, controller) {
        controller.target = angular.element(elem[0]);
        controller.height = attrs.vh;
        controller.resize();

        scope.handleSizes = function () {
          var
            h = $window.innerHeight,
            w = $window.innerWidth;

          if ((h > w && controller.orientation) || (h < w && !controller.orientation)) {
            controller.orientation = !controller.orientation;
            controller.resize();
          }
        };
        angular.element($window).on('resize', scope.handleSizes);
      }
    };
  });