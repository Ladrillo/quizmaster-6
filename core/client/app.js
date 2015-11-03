// libraries and auxiliary modules
var angular = require('angular');
var uiRouter = require('angular-ui-router');
var angularMaterial = require('angular-material');

// main module with dependencies
var app = angular.module('app',  [uiRouter, angularMaterial]);

// features
require('./features/home/')(app);
require('./features/home2/')(app);

// routes
require('./routes')(app);

// debugging
console.log('app loaded, hoorray!');
console.log(window.user);