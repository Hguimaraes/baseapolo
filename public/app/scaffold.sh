#!/bin/bash

usage() {
    echo "Uso: "
    echo "  $0 <nome-do-componente>"
    echo "  E.g.: $0 home.public"
    echo ""
    echo "Isso ira criar a estrutura basica para o componente do MEAN."
    exit 0
}

[ "x$1" == "x" ] && usage

mkdir $1
mkdir "$1/assets"
mkdir "$1/assets/css"
mkdir "$1/assets/img"
mkdir "$1/controllers"
mkdir "$1/routes"
mkdir "$1/services"
mkdir "$1/views"

cat > "$1/assets/css/$1.css" <<EOF
EOF

cat > "$1/controllers/$1.js" <<EOF
'use strict';

angular.module('baseapolo.$1')
	.controller('$1Ctrl', ['$scope', 'Global',
	  function($scope, Global) {
      $scope.global = Global;
      $scope.package = {
        name: '$1'
      };
    }
  ]);
EOF

cat > "$1/routes/$1.js" <<EOF
'use strict';

angular.module('baseapolo.$1', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('/$1', {
          url: '',
          templateUrl: ''
        });
    }]);
EOF

cat > "$1/services/$1.js" <<EOF
'use strict';

angular.module('baseapolo.$1').factory('', [
  function() {
    return {
      name: '$1'
    };
  }
]);
EOF

cat > "$1/views/$1.html" <<EOF
EOF