belrconsole
    .controller('AddOrderCtrl',
        function ($scope) {
            $scope.message = 'This is Add new order screen';
        })

    .controller('ShowOrdersCtrl',
        function ($scope) {
            $scope.message = 'This is Show orders screen';
        })

    .controller('LoginCtrl', ['$scope', '$location', 'auth',
        function ($scope, $location, authService) {
            $scope.Login = {};
            $scope.Login.Submit = function () {
                if ($scope.LoginForm.$valid) {
                    var resp = authService.Login();
                    if (resp.Status === "success") {
                        console.log(resp.Message, $scope.LoginForm.$valid);
                        $location.path('/showOrders');
                    }
                }
            };

            $scope.back = function () {

            };
        }])

    .controller('RegisterCtrl', ['$scope', '$location', 'auth',
        function ($scope, $location, authService) {
            $scope.Register = {};
            $scope.Register.Submit = function () {
                if ($scope.RegisterForm.$valid) {
                    var resp = authService.Register();
                    if (resp.Status === "success") {
                        console.log(resp.Message, $scope.RegisterForm.$valid);
                        $location.path('/showOrders');
                    }
                }
            };
            $scope.back = function () {

            };
        }])

    .controller('HeaderCtrl', ['$scope', 'auth',
        function ($scope, authService) {
            $scope.welcomeMessage = '';
            
            $scope.isLogged = authService.IsLogged;
            $scope.Logout = authService.Logout;
        }])

    .run(['$rootScope', 'auth',
        function ($rootScope, authService) {
            $rootScope.welcomeMessage = '';
            $rootScope.theme = 'cyborg';
            $rootScope.theme = 'journal';
            $rootScope.theme = 'shamrock';
        }])