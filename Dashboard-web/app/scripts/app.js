'use strict';

/**
 * @ngdoc overview
 * @name projectApp
 * @description
 * # projectApp
 *
 * Main module of the application.
 */
angular
  .module('projectApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'lbServices'
  ])


  .config(function ($routeProvider, LoopBackResourceProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LogincontrollerCtrl'
    })
    .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
    })
    .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
    })
      .otherwise({
        redirectTo: '/'
      });
  LoopBackResourceProvider.setUrlBase('http://0.0.0.0:3000/api');

  });

