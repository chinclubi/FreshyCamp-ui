/* global angular */
var appControl = angular.module('appController', [])

appControl.controller('preRegisterController', ['$scope', '$http' , '$state' , '$stateParams' , function ($scope, $http, $state, $stateParams) {
  $scope.currentUI = 0;
  $scope.message = 'Welcome to Freshy Camp Registration.';
  $scope.state = [];
  $scope.name="";
  $scope.names = ['smart','smarty','smartoo', 'chin', 'ong'];
  $http.get("http://localhost:3000")
    .success(function(names){
      console.log(names);
      names.forEach(function(name){
        $scope.names.push(name.name);
      })
    });
  $scope.setCurrentUI = function(current){
    $scope.currentUI = current;
  }

  
  
}])

appControl.controller('confirmPersonController', ['$scope', '$http', function ($scope, $http) {
  $scope.message = 'This is you right?.';
  $scope.name="";
  // $http.get("localhost:3000/all")
  // 	.success(function(names){
  // 		names.forEach(function(name){
  // 			$scope.names.push(name.name);
  // 		})
  // 	});
}])

