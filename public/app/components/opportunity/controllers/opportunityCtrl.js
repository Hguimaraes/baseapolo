angular.module('baseapolo').controller('opportunityCtrl', function ($scope, $state, newsAPI, newsId) {
    $scope.news = newsAPI.getNewsById(newsId);
    if ($scope.news) {
        if ($scope.news.stars) {
            $scope.emails = $scope.news.stars;
        }
    }
    
    $scope.delete = function () {
        newsAPI.deleteNews($scope.news._id);
        $state.transitionTo('root.account');
    }
    console.log("opportunityCtrl");
});
