angular
  .module('todo')
  .controller('todoListController', function($scope, TodoService, $location) {

    $scope.welcomeMessage = "Welcome to todo application";

    // get todo list
    $scope.todoList = [];
    TodoService.list().then(function(response) {
        $scope.todoList = response;
      }, 
      function(error) {
        console.log(error);
      });

    // add new todo handler
    $scope.newTodo = function() {
      var newTodo = {
        title: $scope.title,
        body: $scope.body,
        status: 'todo'
      };
      $scope.todoList.push(newTodo);

      TodoService.newTodo(newTodo).then(function(response) {
        console.log(response);
      }, 
      function(error) {
        console.log(error);
      });
    };

    $scope.todoDetails = function(todo) {
      $location.path('/todo/' + todo._id);
    };

  });