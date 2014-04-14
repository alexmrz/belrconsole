belrconsole
    .constant('VIEWS', (function () {
        var url = 'templates/';
        return {
            AddOrder: url + 'add-order.html',
            ShowOrders: url + 'show-orders.html',
            Login: url + 'login.html',
            Register: url + 'register.html'
        };
    })())