/* global angular */
var appControl = angular.module('appController', [])

appControl.controller('preRegisterController', ['$scope', '$http' , '$state' , '$stateParams' , function ($scope, $http, $state, $stateParams) {
  $scope.currentUI = 0
  $scope.message = 'Welcome to Freshy Camp Registration.'
  $scope.state = []
  $scope.colors=['แดง' ,'น้ำเงิน' ,'เขียว' ,'เหลือง' ,'แสด' ,'น้ำตาล']
  $scope.name = ''
  $scope.names = []
  $scope.all
  $scope.colorClass = "";
  $http.get('http://localhost:3000/all')
    .success(function (names) {
      // console.log(names)
      $scope.all = names
      names.forEach(function (name) {
        $scope.names.push(name.name)
      })
    })
  $scope.checkColor = function(color){
    if(color==0)
      $scope.colors
  }


  $scope.setCurrentUI = function (current) {
    if (current == 1) {
      $scope.message="Is this you?"
      $scope.all.some(function (name) {
        if (name.name == $scope.name) {
          $http.get('http://localhost:3000/' + name.student_id)
            .success(function (object) {
              $scope.person = object[0]
              console.log($scope.person.color)
            })

          return true
        }
      })
    }
    if (current == 2) {
      $scope.message="Congratulation!"
      console.log($scope.person.student_id);
      $http.post('http://localhost:3000/register', {id: $scope.person.student_id}).
        then(function (response) {
          console.log('hey')
          $scope.getColor = response["data"][0];
          $scope.colorClass = $scope.getColor.en_name;
        // this callback will be called asynchronously
        // when the response is available
        }, function (response) {
          console.log('fuck')
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        })
    }

    $scope.currentUI = current
    

  }



}])
