'use strict';

angular.module('workspaceApp')

  .controller('LoginCtrl', function ($scope) {
    $scope.email = '';
    $scope.password = '';
    $scope.isLoggedIn = false;

    $scope.validate = function() {
      var email = $scope.email;
      var password = $scope.password;
      if(email === 'jaime@gmail.com' && password ==='1234')
      {
        // spoof a validation success
        $scope.isLoggedIn = true;
      }
      else
      {
        $scope.isLoggedIn = false;
      }
    };
  });
