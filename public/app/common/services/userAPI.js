angular.module('baseapolo').factory('userAPI', function() {
    var user = function () {
        this.getStars = function() {
            // Get the list of ids the user has given a star
            return [
                '123',
                '456',
                '4',
                '90'
            ];
        };
        
        this.setStar = function (id) {
            // Send the request to the server
            console.log("set star with id " + id);
        };
        
        this.isLoggedIn = function() {
            // Ask the server if the user is logged in
            console.log("User not is logged in");
            return false;
        };
    }

    return user;
});