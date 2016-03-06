angular.module('baseapolo').factory('userAPI', function () {

    var userAPI = {};

    userAPI.getName = function () {
        return 'username';
    };

    userAPI.setName = function (name) {
        // Send the request to the server
    };

    userAPI.getEmail = function () {
        // Send the request to the server
        return 'email@email.com'
    };

    userAPI.getStars = function () {
        // Get the list of ids the user has given a star
        return [
            '123',
            '456',
            '4',
            '90',
            '1'
        ];
    };

    userAPI.setStar = function (id) {
        // Send the request to the server
        console.log("star id " + id);
    };

    userAPI.unStar = function (id) {
        // Removes the star
        console.log("unstar id " + id);
    };

    userAPI.getCreations = function () {
        // Get a list of user's creations
        return ['2', '5'];
    }

    userAPI.getUserData = function () {
        // Get all the user data
        return {
            name: 'username',
            email: 'email@email.com',
            stars: [
                '123',
                '456',
                '4',
                '90',
                '1'
            ],
            creations: [
                '2',
                '5'
            ]
        }
    };
    
    userAPI.logout = function () {
        console.log("logout");
    }

    return userAPI;
});