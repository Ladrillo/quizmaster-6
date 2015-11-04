module.exports = function (app) {
    app.config(['$stateProvider', '$urlRouterProvider', routing]);


    function routing($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    main: {
                        template: require('./features/home/home.template.html'),
                        controller: 'homeController'
                    }
                }
            })
            .state('home2', {
                url: '/home2',
                views: {
                    main: {
                        template: require('./features/home2/home2.template.html'),
                        controller: 'home2Controller'
                    }
                }
            });
    }
};