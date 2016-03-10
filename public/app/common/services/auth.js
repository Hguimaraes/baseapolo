angular.module('baseapolo').provider('auth', function () {
    this.isAuthenticated = function () {
        // Request the server if the user if logged in
        return false;
    }

    this.$get = function () {
        var that = this;
        return {
            isAuthenticated: that.isAuthenticated
        };
    };
});
