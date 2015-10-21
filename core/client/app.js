var angular = require('angular');
var uiRouter = require('angular-ui-router');
var ngResource = require('ng-resource');


var app = angular.module('app', [uiRouter]);

require('./features/home/')(app); 

require('./routes')(app);