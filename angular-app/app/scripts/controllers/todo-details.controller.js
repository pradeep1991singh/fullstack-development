angular
  .module('todo')
  .controller('todoDetailsController', function($scope, TodoService, $routeParams, $location) {

    // get todo
    TodoService.get($routeParams.id).then(function(response) {        
        $scope.todo = response;
      }, 
      function(error) {
        console.log(error);
      });

    // delete todo handler
    $scope.done = function() {
      TodoService.delete($routeParams.id).then(function(response) {
        $location.path('/');
      }, 
      function(error) {
        console.log(error);
      });
    };

  });