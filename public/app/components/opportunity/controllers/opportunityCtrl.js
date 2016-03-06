angular.module('baseapolo').controller('opportunityCtrl', function ($scope, newsAPI, newsId) {
    $scope.news = newsAPI.getNewsById(newsId);
    if ($scope.news) {
        if ($scope.news.stars) {
            $scope.emails = $scope.news.stars;
        }
    } 
    console.log("opportunityCtrl");
});
