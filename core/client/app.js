console.log('app loaded');

var angular = require('angular');
var uiRouter = require('angular-ui-router');
var ngResource = require('ng-resource');


var app = angular.module('app', [uiRouter, ngResource, '$resource']);






require('./features/home/')(app); // feature implemented in ES5
require('./features/stylists/'); // feature partly implemented in ES6

require('./routes')(app);

require('./features/contact/')(app);