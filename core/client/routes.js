module.exports = function (app) {

    app.config(['$stateProvider', '$urlRouterProvider', routing]);

    function routing($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('home', {
                url: '/home',
                data: {
                    myCat: 'freddy',
                    requireLogin: true
                },
                views: {
                    main: {
                        template: require('./features/home/home.template.html'),
                        controller: 'homeController'
                    }
                }
            })
            .state('home2', {
                url: '/home2',
                data: {
                    requireLogin: false
                },
                views: {
                    main: {
                        template: require('./features/home2/home2.template.html'),
                        controller: 'home2Controller'
                    }
                }
            });
    }

    app.run(function ($rootScope, authUserService) {

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {

            var requireLogin = toState.data.requireLogin;

            if (requireLogin && !authUserService.user) {
                event.preventDefault();
                console.log('get the fuck outta here!');
            }
        });

    });
};