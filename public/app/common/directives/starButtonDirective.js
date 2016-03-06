angular.module("baseapolo").directive('starButton', function () {
    return {
        restrict: 'E',
        templateUrl: './app/common/directives/starButtonView.html',
        scope: {
            onStarClick: '=',
            newsId: '@'
        },
        link: function(scope, element, attrs) {
            scope.button = element.find("button");
            element.bind('click', function() {
                scope.button.toggleClass("active");
                if (scope.onStarClick) {
                    scope.onStarClick(scope.newsId);
                }
            });
        }
    };
});
