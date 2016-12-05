'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
  .controller('MainCtrl', function ($scope, User) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.credectials={email:"prasanthnarasimha@gmail.com",password:"1234"};
    User.login({email:"prasanth@gmail.com",password:"1234"}, function(data) {
        console.log(data);
   $scope.products = User.find({
  filter: {
    limit: 10
  }
});
            console.log($scope.products);

});
   
  });
