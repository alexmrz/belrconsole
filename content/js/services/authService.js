belrconsole
    .service('auth', ["$cookieStore", function($cookieStore) {
        var isLogged = $cookieStore.get('LoginData') || false;
        var isAdmin = true;
        
        var saveCookies = function() {
            $cookieStore.put('LoginData', isLogged);
        };

        this.IsLogged = function() {
            return isLogged;
        };

        this.Login = function() {
            isLogged = true;
            saveCookies();
            
            return new Response(isLogged, "You are logged.");
        };

        this.Logout = function() {
            isLogged = false;
            saveCookies();

            return new Response(isLogged, "You are logged out.");
        };

        this.Register = function() {
            return new Response(true, "You are registered.");
        };
    }])