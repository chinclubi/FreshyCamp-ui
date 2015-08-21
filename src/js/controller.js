/* global angular */
var appControl = angular.module('appController', [])

appControl.controller('preRegisterController', ['$scope', '$http' , '$state' , '$stateParams' , function ($scope, $http, $state, $stateParams) {
  $scope.currentUI = 0;
  $scope.message = 'Welcome to Freshy Camp Registration.';
  $scope.state = [];
  $scope.name="";
  $scope.names = [];
  $scope.all;
  $http.get("http://localhost:3000/all")
    .success(function(names){
      // console.log(names);
      $scope.all=names;
      names.forEach(function(name){
        $scope.names.push(name.name);
      })
    });
  $scope.setCurrentUI = function(current){
    $scope.currentUI = current;
    $scope.all.forEach(function(name){
      // console.log(name.name + "==" + $scope.name)
      // console.log(name.name == $scope.name)
      if(name.name == $scope.name){
        // console.log(name.student_id)
        console.log("http://localhost:3000/"+name.student_id);
        $http.get("http://localhost:3000/"+name.student_id )
        .success(function(object){
          $scope.color=object[0].color;
          console.log(object[0].color);
        })

        return false;
      }
    })
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


