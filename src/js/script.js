/* global angular */
var app = angular.module('freshyCampApp', [])

app.controller('mainController', ['$scope', function ($scope) {
  $scope.message = 'Welcome to Freshy Camp Registration.'
}])
