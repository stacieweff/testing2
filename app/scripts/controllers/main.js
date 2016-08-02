'use strict';

/**
 * @ngdoc function
 * @name testing2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testing2App
 */
angular.module('testing2App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
