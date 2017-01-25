angular
  .module('todo')
	.service('TodoService', function($q, $resource, $httpParamSerializerJQLike) {

    var baseUrl = 'http://localhost:8080/api';
		var Todo = $resource(baseUrl + '/todos/:id', {id: '@id'}, {
        new: {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}, 
            transformRequest: function(obj) {
                var str = [];
                for (var param in obj) {
                  str.push(encodeURIComponent(param) + '=' + encodeURIComponent(obj[param]));
                }
                return str.join('&');
            },                       
        }         
      });

		this.list = function() {
			var defer = $q.defer();
			Todo.query(function(response) {
				defer.resolve(response);
			}, function(error) {
        defer.reject(error);
      });
			return defer.promise;
		};

		this.newTodo = function(newTodo) {
			var defer = $q.defer();
      Todo.new(newTodo, function(response) {
				defer.resolve(response);
			}, function(error) {
        defer.reject(error);
      });
			return defer.promise;
		}; 

		this.get = function(id) {
			var defer = $q.defer();
      Todo.get({id: id}, function(response) {
				defer.resolve(response);
			}, function(error) {
        defer.reject(error);
      });
			return defer.promise;
		};

		this.delete = function(id) {
			var defer = $q.defer();
      Todo.delete({id: id}, function(response) {
				defer.resolve(response);
			}, function(error) {
        defer.reject(error);
      });
			return defer.promise;
		};            

	});