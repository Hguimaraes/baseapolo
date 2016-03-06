angular.module('baseapolo').controller('newOpportunityCtrl', function ($scope, newsAPI) {
    
    $scope.news = newsAPI.getNews();
    $scope.categories = newsAPI.getCategories();
    $scope.current_category_text = 'Curso';
    
    $scope.selectCategory = function (category) {
        console.log("Select category " + category);
        $scope.current_category = category;
        $scope.current_category_text = category;
    }

    console.log("newOpportunityCtrl");
});
