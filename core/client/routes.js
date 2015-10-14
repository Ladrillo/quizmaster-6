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
            })
            .state('stylists', {
                url: '/stylists',
                views: {
                    main: {
                        template: require('./features/stylists/stylists.template.html'),
                        controller: 'stylistsController',
                        controllerAs: 'stylists'
                    },
                }
            })
            .state('contact', {
                url: '/contact',
                views: {
                    main: {
                        template: require('./features/contact/contact.template.html'),
                        controller: 'contactController'
                    },
                }
            });
    });
};