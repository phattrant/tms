var app = angular.module("app", ['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'login.html',
            controller: 'loginController'
        }).

        when('/home', {
            templateUrl: 'home.html',
            controller: 'homeController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

app.controller("loginController", ['$scope', function($scope) {

}]);

app.controller("homeController", ['$scope', function($scope) {

}]);

