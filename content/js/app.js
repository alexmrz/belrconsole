var sampleApp = angular.module('belrconsole', ['ngRoute']);

sampleApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/addOrder', {
            templateUrl: 'templates/add-order.html',
            controller: 'AddOrderController'
        }).
        when('/showOrders', {
            templateUrl: 'templates/show-orders.html',
            controller: 'ShowOrdersController'
        }).
        otherwise({
            redirectTo: '/addOrder'
        });
  }]);

sampleApp.controller('AddOrderController', function ($scope) {
    $scope.message = 'This is Add new order screen';
});

sampleApp.controller('ShowOrdersController', function ($scope) {
    $scope.message = 'This is Show orders screen';
});