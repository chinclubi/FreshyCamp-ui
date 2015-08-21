/* global angular */
var appControl = angular.module('appController', [])

appControl.controller('preRegisterController', ['$scope','$state' , '$stateParams' , '$http', function ($scope, $stateParams, $http, $state) {
  $scope.message = 'Welcome to Freshy Camp Registration.';
  $scope.$state = $state;
  $scope.name="";
  $scope.names = ['smart', 'chin', 'ong'];
  // $http.get("localhost:3000/all")
  // 	.success(function(names){
  // 		names.forEach(function(name){
  // 			$scope.names.push(name.name);
  // 		})
  // 	});
}])



appControl.controller('confirmPersonController', ['$scope', '$http', function ($scope, $http) {
  $scope.message = 'This is you right?.'
  $scope.name="";
  // $http.get("localhost:3000/all")
  // 	.success(function(names){
  // 		names.forEach(function(name){
  // 			$scope.names.push(name.name);
  // 		})
  // 	});
}])