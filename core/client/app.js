var angular = require('angular');
var uiRouter = require('angular-ui-router');
var angularMaterial = require('angular-material');


var app = angular.module('app',  [uiRouter, angularMaterial]);

require('./features/home/')(app);

require('./routes')(app);

console.log('app loaded, hoorray!');