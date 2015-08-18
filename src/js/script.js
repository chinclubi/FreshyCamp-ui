/* global angular */
var app = angular.module('freshyCampApp', [
  'ui.router',
  'appController',
  'appService'
])

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/app')

  $stateProvider
    .state('app', {
      url: '/app',
      templateUrl: 'templates/main.tmpl.html',
      controller: 'mainController'
    })
}])
