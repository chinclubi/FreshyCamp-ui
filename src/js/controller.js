/* global angular */
var control = angular.module('appController', [])

control.controller('preRegisterController', ['$scope', '$http', function ($scope, $http) {
  $scope.message = 'Welcome to Freshy Camp Registration.'
  $scope.name="";
  $scope.names = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Dakota","North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];
  $http.get(name.json)
  	.success(function(data){
  		$scope.names= data;
  	});
}])
