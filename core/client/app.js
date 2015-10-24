var angular = require('angular');
var uiRouter = require('angular-ui-router');
var $ = require('jquery');

window.jQuery = $;
window.$ = $;

var app = angular.module('app', [uiRouter]);

require('./features/home/')(app);

require('./routes')(app);