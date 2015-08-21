/* global angular */
var appControl = angular.module('appController', [])

appControl.controller('preRegisterController', ['$scope', '$http' , '$state' , '$stateParams' , function ($scope, $http, $state, $stateParams) {
  $scope.currentUI = 0
  $scope.message = 'Welcome to Freshy Camp Registration.'
  $scope.state = []
  $scope.name = ''
  $scope.names = []
  $scope.all
  $http.get('http://localhost:3000/all')
    .success(function (names) {
      // console.log(names)
      $scope.all = names
      names.forEach(function (name) {
        $scope.names.push(name.name)
      })
    })
  $scope.setCurrentUI = function (current) {
    $scope.currentUI = current
    if (current == 1) {
      $scope.all.some(function (name) {
        if (name.name == $scope.name) {
          $http.get('http://localhost:3000/' + name.student_id)
            .success(function (object) {
              $scope.person = object[0]
            })

          return true
        }
      })
    }
    if (current == 2) {
      $http.post('http://localhost:3000/register', {id: $scope.person.student_id}).
        then(function (response) {
          console.log('hey')
        // this callback will be called asynchronously
        // when the response is available
        }, function (response) {
          console.log('fuck')
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        })
    }

  }



}])
