/* global angular */
var control = angular.module('appController', [])

control.controller('mainController', ['$scope', function ($scope) {
  $scope.message = 'Welcome to Freshy Camp Registration.'
}])
