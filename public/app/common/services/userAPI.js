angular.module('baseapolo').factory('userAPI', function () {

    var user = {};

    user.getName = function () {
        return 'username';
    };

    user.setName = function (name) {
        // Send the request to the server
    };

    user.getEmail = function () {
        // Send the request to the server
        return 'email@email.com'
    };

    user.getStars = function () {
        // Get the list of ids the user has given a star
        return [
            '123',
            '456',
            '4',
            '90',
            '1'
        ];
    };

    user.setStar = function (id) {
        // Send the request to the server
        console.log("star id " + id);
    };

    user.unStar = function (id) {
        // Removes the star
        console.log("unstar id " + id);
    };

    return user;
});