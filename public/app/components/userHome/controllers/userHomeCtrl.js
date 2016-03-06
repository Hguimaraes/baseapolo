angular.module('baseapolo').controller('userHomeCtrl', function ($scope, userAPI, newsAPI) {

    $scope.news = newsAPI.getNews();
    $scope.categories = newsAPI.getCategories();
    $scope.categories.push("");
    $scope.current_category = "";
    $scope.current_category_text = "Curso"; //This variable won't intefere on the category filter
    
    $scope.filter = '';
    
    $scope.selectCategory = function (category) {
        console.log("Select category " + category);
        $scope.current_category = category;
        $scope.current_category_text = category;
        if (category == "") {
            $scope.current_category_text = "Curso";
        }
    }

    console.log("userHomeCtrl");
});
