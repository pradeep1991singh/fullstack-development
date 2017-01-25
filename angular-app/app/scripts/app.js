angular
  .module('todo', ['ngRoute', 'ngResource'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/todo-list.html',
        controller: 'todoListController'
      })
      .when('/todo/:id', {
        templateUrl: 'views/todo-details.html',
        controller: 'todoDetailsController'
      })      
      .otherwise({
        redirectTo: '/'
      })
  });