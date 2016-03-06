angular.module('baseapolo').controller('accountCtrl', function ($scope, userAPI, newsAPI) {
    
    $scope.user = userAPI.getUserData();
    
    $scope.stars = newsAPI.getNews(userAPI.getStars()); 
    
    $scope.creations = newsAPI.getNews(userAPI.getCreations());
    
    console.log("accountCtrl");
});
