(() => {
    "use stict";
    angular.module("inventory-manager")
        .config([
            "$stateProvider", "$urlRouterProvider", "$locationProvider", ($stateProvider, $urlRouterProvider, $locationProvider) => {
                $locationProvider.html5Mode(true);
                $urlRouterProvider.otherwise("/");
                $urlRouterProvider.when("/", "/home");
                $stateProvider.state('main', {
                        url: '/',
                        templateUrl: "app/main/main.html",
                    })
                    .state('main.home', {
                        url: 'home',
                        templateUrl: "app/main/home/home.html",
                        controller: "homeCtrl"
                    })
                    .state('main.createedit', {
                        url: 'createedit',
                        templateUrl: "app/main/createedit/createedit.html",
                        controller: "createeditCtrl",
                        params: { createeditData: null }
                    })
            }
        ]);
})();