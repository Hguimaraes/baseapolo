angular.module('baseapolo').provider('auth', function () {
    this.isLoggedIn = function () {
        // Request the server if the user if logged in
        return true;
    }

    this.$get = function () {
        return {
            isLoggedIn: isLoggedIn
        };
    };
});