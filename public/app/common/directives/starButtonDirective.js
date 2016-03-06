angular.module("baseapolo").directive('starButton', function (userAPI) {
    return {
        restrict: 'E',
        templateUrl: './app/common/directives/starButtonView.html',
        scope: {
            onStarClick: '=',
            newsId: '@'
        },
        link: function (scope, element, attrs) {
            scope.button = element.find("button");

            if (userAPI.getStars().lastIndexOf(scope.newsId) > -1) {
                scope.button.addClass('active');
            }
            element.bind('click', function () {
                if (!scope.button.hasClass('active')) {
                    userAPI.setStar(scope.newsId);
                } else {
                    userAPI.unStar(scope.newsId);
                }
                scope.button.toggleClass("active");
                if (scope.onStarClick) {
                    scope.onStarClick(scope.newsId);
                }
            });
        }
    };
});
