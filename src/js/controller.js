/* global angular */
var control = angular.module('appController', [])

control.controller('preRegisterController', ['$scope', '$http', function ($scope, $http) {
  $scope.message = 'Welcome to Freshy Camp Registration.'
  $http.get
}])
