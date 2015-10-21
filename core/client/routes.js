module.exports = function (app) {
    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    main: {
                        template: require('./features/home/home.template.html'),
                        controller: 'homeController'
                    },
                }
            });
    });
};