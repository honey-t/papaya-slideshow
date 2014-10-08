// create the module and name it papayaSperk
var papayaSperk = angular.module('papayaSperk', ['ngRoute', 'ngAnimate']);

// configure our routes
papayaSperk.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/jewels', {
            templateUrl: 'pages/jewels.html',
            controller: 'jewelsController'
        })
        .when('/inspiration', {
            templateUrl: 'pages/inspiration.html',
            controller: 'inspirationController'
        })
        .when('/order', {
            templateUrl: 'pages/order.html',
            controller: 'orderController'
        });
});

// create the controller and inject Angular's $scope
papayaSperk.controller('mainController', function ($scope) {
// create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    $scope.pageClass = 'page-home';
});

papayaSperk.controller('jewelsController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
    $scope.pageClass = 'page-contact';
});

papayaSperk.controller('inspirationController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
    $scope.pageClass = 'page-home';
});

papayaSperk.controller('orderController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
    $scope.pageClass = 'page-about';
});