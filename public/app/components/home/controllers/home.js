'use strict';

angular.module('baseapolo').controller('courseCtrl',
    function ($scope, $location) {

        $scope.courses = [
            'Engenharia Ambiental',
            'Engenharia Civil',
            'Engenharia-Básico',
            'Engenharia de Computação e Informação',
            'Engenharia de Controle e Automação',
            'Engenharia de Materiais',
            'Engenharia de Petróleo',
            'Engenharia de Produção',
            'Engenharia Eletrônica e de Computação',
            'Engenharia Elétrica',
            'Engenharia Mecânica',
            'Engenharia Metalúrgica',
            'Engenharia Naval e Oceânica',
            'Engenharia Nuclear'];

        $scope.course = $scope.courses[0];

        $scope.update = function (item) {
            $scope.course = item;
        }
        console.log("courseCtrl");
    });
