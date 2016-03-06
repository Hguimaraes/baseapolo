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
        }
    };
});