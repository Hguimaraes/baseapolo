angular.module('baseapolo').provider('auth', function () {
    var _user;
    // var _user = {};

    this.getUser = function () {
        return _user;
    }

    this.setUser = function () {
        _user = user;
    }

    this.isLoggedIn = function () {
        return !!_user;
    }

    this.$get = function () {
        return {
            getUser: getUser,
            setUser: setUser,
            isLoggedIn: isLoggedIn
        };
    };
});