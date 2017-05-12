var app = angular
  .module('ngCribs', [
    'ui.router',
  ])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home');

      // States
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'index.html',
        })
       
        .state('resume', {
          url: '/resume',
          templateUrl: 'resume.html',
        })
         .state('about', {
          url: '/slide',
          templateUrl: 'slide.html'
        });
    }
  ])
