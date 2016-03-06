angular.module('baseapolo').directive('opportunityCard', function (userAPI, $timeout) {
    return {
        templateUrl: "./app/common/directives/opportunityCardView.html",
        restrict: 'E',
        scope: {
            content: '@',
            title: '@',
            author: '@',
            stars: '@',
            onStarClick: '=',
            newsId: '@'
        },
        link: function (scope, element, attrs, controller) {
            // Init the star button
            // TODO: Remove the timeout and use the request promise after
            // integrating with the server
            $timeout(function () {
                if (userAPI.getStars().lastIndexOf(scope.newsId) > -1) {
                    var button = element.find("button");
                    button.addClass('active');
                }
            }, 1000);

            // Handle when user clicks on the star button
            element.bind('click', function () {
                var button = element.find("button");

                if (button.hasClass('active')) {
                    userAPI.setStar(scope.newsId);
                } else {
                    userAPI.unStar(scope.newsId);
                }
            });
        }
    };
});