angular.module('baseapolo').controller('opportunityCtrl', function ($scope, newsAPI, newsId) {
    $scope.news = newsAPI.getNewsById(newsId);
    console.log("opportunityCtrl");
});
