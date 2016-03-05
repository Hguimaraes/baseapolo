angular.module('baseapolo').controller('userHomeCtrl', function ($scope, userAPI, newsAPI) {

    $scope.user = userAPI;
    $scope.news = newsAPI.getNews();

    var getBtnElem = function (news_id) {
        var card_id = $scope.getCardId(news_id)
        var btn_elem = angular.element('#' + card_id).find('button');
        return btn_elem;
    }

    $scope.handleStar = function (news_id) {
        if (getBtnElem(news_id).hasClass('active')) {
            $scope.user.setStar(news_id);
        } else {
            $scope.user.unStar(news_id);
        }
    }

    $scope.getCardId = function (news_id) {
        return 'news-id-' + news_id;
    }

    $scope.initStar = function (news_id) {
        // If the user has starred the news, activate the star 
        
        if ($scope.user.getStars().lastIndexOf(news_id) > -1) {
            var btn = getBtnElem(news_id)
            btn.addClass('active');
        }

    }
    
    $scope.filter = '';

    console.log("userHomeCtrl");
});
