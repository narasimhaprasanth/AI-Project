'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:LogincontrollerCtrl
 * @description
 * # LogincontrollerCtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
  .controller('LogincontrollerCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
FB.getLoginStatus(function(response) {
    console.log(response);
    statusChangeCallback(response);
});
  });
