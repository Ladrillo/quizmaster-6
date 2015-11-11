// libraries and auxiliary modules
var angular = require('angular');
var uiRouter = require('angular-ui-router');
var angularMaterial = require('angular-material');

// main module with dependencies
var app = angular.module('app', [uiRouter, angularMaterial]);

// services
require('./services/auth.user.service')(app);

// directives
require('./directives/login/login.directive')(app);
require('./directives/menu/menu.directive')(app);

// features
require('./features/home/')(app);
require('./features/quizedit/')(app);

// routes
require('./routes')(app);

// debugging
console.log('app loaded, hoorray!');