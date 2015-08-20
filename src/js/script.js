/* global angular */
var app = angular.module('freshyCampApp', [
  'ui.router',
  'ui.utils',
  'mgcrea.ngStrap',
  'appController',
  'appService'
])

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/app')

  $stateProvider
    .state('pre-register', {
    	url: '/app',
    	templateUrl: 'templates/main.tmpl.html',
     	controller: 'preRegisterController'
    })

    .state('random-mung',{
    })

    .state('annouce-mung',{

    })
}])
