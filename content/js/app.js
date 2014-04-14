///<reference path="utils.js"/>

var belrconsole = angular.module('belrconsole', ['ngRoute', 'ngCookies', 'ui.bootstrap'])

        .constant('VIEWS', (function () {
            var url = 'templates/';
            return {
                AddOrder: url + 'add-order.html',
                ShowOrders: url + 'show-orders.html',
                Login: url + 'login.html',
                Register: url + 'register.html'
            };
        })())

        .config(['$routeProvider', 'VIEWS', function ($routeProvider, VIEWS) {

            function when(path, url, ctrl) {
                $routeProvider.when(path, getBaseRoute(url, ctrl));
            }

            when('/addOrder',   VIEWS.AddOrder,   'AddOrderCtrl');
            when('/showOrders', VIEWS.ShowOrders, 'ShowOrdersCtrl');
            when('/login',      VIEWS.Login,      'LoginCtrl');
            when('/register',   VIEWS.Register,   'RegisterCtrl');

            $routeProvider.otherwise({ redirectTo: '/showOrders' });
        }])

        
        
        
        
        