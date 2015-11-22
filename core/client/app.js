// libraries and auxiliary modules
var angular = require('angular');
var uiRouter = require('angular-ui-router');
var ngMessages = require('angular-messages');
var angularMaterial = require('angular-material');


// main module with dependencies
var app = angular.module('app', [uiRouter, angularMaterial, ngMessages]);


// services
require('./services/auth.user.service')(app);
require('./services/appstate.service')(app);
require('./services/user.service')(app);
require('./services/quiz.service')(app);


// directives
require('./directives/login/login.directive')(app);
require('./directives/menu/menu.directive')(app);


// features
require('./features/home/')(app);
require('./features/quizedit/')(app);
require('./features/quizlist/')(app);


// routes
require('./routes')(app);


// debugging
console.log('app loaded, txoopie!');