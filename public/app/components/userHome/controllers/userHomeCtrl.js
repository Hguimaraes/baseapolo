angular.module('baseapolo').controller('userHomeCtrl', function ($scope, userAPI, newsAPI) {

    $scope.news = newsAPI.getNews();
    $scope.categories = newsAPI.getCategories();
    $scope.categories.push("");
    $scope.current_category = "";
    $scope.current_category_text = "Curso"; //This variable won't intefere on the category filter

    var getBtnElem = function (news_id) {
        var card_id = $scope.getCardId(news_id)
        var btn_elem = angular.element('#' + card_id).find('button');
        return btn_elem;
    }

    $scope.handleStar = function (news_id) {
        if (getBtnElem(news_id).hasClass('active')) {
            userAPI.setStar(news_id);
        } else {
            userAPI.unStar(news_id);
        }
    }

    $scope.getCardId = function (news_id) {
        return 'news-id-' + news_id;
    }

    $scope.initStar = function (news_id) {
        // If the user has starred the news, activate the star 
        
        if (userAPI.getStars().lastIndexOf(news_id) > -1) {
            var btn = getBtnElem(news_id)
            btn.addClass('active');
        }

    }
    
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
