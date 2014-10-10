// create the module and name it papayaSperk
var papayaSperk = angular.module('papayaSperk', ['ngRoute', 'ngAnimate', 'ngTouch']);

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
    $scope.pageClass = 'page-jewels';


            // Set of Photos
            $scope.photos = [
                {src: 'imgs/ear/ear4.png', desc: 'Image 01'},
                {src: 'imgs/ear/ear2.png', desc: 'Image 02'},
                {src: 'imgs/ear/ear3.png', desc: 'Image 03'},
                {src: 'imgs/ear/ear5.png', desc: 'Image 04'},
                {src: 'imgs/ear/ear1.png', desc: 'Image 05'},

            ];

            // initial image index
            $scope._Index = 0;

            // if a current image is the same as requested image
            $scope.isActive = function (index) {
                return $scope._Index === index;
            };

            // show prev image
            $scope.showPrev = function () {
                $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
            };

            // show next image
            $scope.showNext = function () {
                $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
            };

            // show a certain image
            $scope.showPhoto = function (index) {
                $scope._Index = index;
            };


});

papayaSperk.controller('inspirationController', function ($scope) {
    $scope.pageClass = 'page-inspiration';
});

papayaSperk.controller('orderController', function ($scope) {
    $scope.pageClass = 'page-order';
});

