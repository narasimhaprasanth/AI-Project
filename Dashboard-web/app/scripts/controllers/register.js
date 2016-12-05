'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:AboutCtrl
 * @description
 * # RegisterCtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
  .controller('RegisterCtrl', function (User, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.register = function(){
        $scope.username = $scope.profile.firstName+$scope.profile.lastName;
    User.create({"realm": "string",
  "username": $scope.username,
  "email": $scope.profile.email,
  "emailVerified": true,
  "status": "A",
  "created": "2016-12-04",
  "lastUpdated": "2016-12-04",
  "password":$scope.profile.password},function(data){
        console.log(data);
    },function(err){
       console.log(err); 
    });
    }

  });