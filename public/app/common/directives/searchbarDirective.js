angular.module("baseapolo").directive('searchbar', function () {
    return {
        restrict: 'E',
        templateUrl: './app/common/directives/searchbarView.html',
        scope: {
            ngModel: '='
        },
        link: function(scope, element, attrs) {
        }
    };
});
