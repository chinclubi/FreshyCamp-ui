/* global angular */
var app = angular.module('freshyCampApp', [
  'ui.router',
  'ui.utils',
  'ngAnimate',
  'mgcrea.ngStrap',
  'appController',
  'appService'
])

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/app')

  $stateProvider
    .state('register', {
    	url: '/app',
    	templateUrl: 'templates/main.tmpl.html',
     	controller: 'preRegisterController'
    })

    .state('confirm-person',{
    	parent: 'register',
    	url: '/person',
    	templateUrl: 'templates/person.tmpl.html',
    	controller: 'confirmPersonController'
    })

    .state('annouce-mung',{

    })
}])
