'use strict';

/**
 * @ngdoc overview
 * @name testWeblibApp
 * @description
 * # testWeblibApp
 *
 * Main module of the application.
 */
angular
    .module('testWeblibApp', [
        'ngAnimate',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .otherwise({
                redirectTo: '/'
            });
    });