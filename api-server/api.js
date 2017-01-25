// api configuration

// express server configuration
var express = require('express');
var api = express();

// body configuration for handling middleware
var bodyParser = require('body-parser');

// mongoose(mongoDB database) configuration
var mongoose = require('mongoose');
var Todo =  require('./Todo.model');

// api port, api will be running on 8080
var port = 8080;

// connect to mongoDB
var db = 'mongodb://localhost/mydb';
mongoose.connect(db);

// bodyParser configuration
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({
  extended: true
}));

// enable cors
api.all('/*', function(req, res, next) {
	console.log('request made for: %s', req.originalUrl);
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,OPTIONS,DELETE');
	next();
});

// api root
api.get('/', function(req, res) {
  res.send('api running... <br> please use "/api/todos" for getting all todos ');
});

// get list of todos
api.get('/api/todos', function(req, res) {
  console.log('getting all todos');
  Todo.find({})
    .exec(function(error, todos) {
      if (error) {
        console.log('error getting list');
      } else {
        console.log(todos);
        res.json(todos);
      }
    });
});

// get particular single todo
api.get('/api/todos/:id', function(req, res) {
  Todo.findOne({
    _id: req.params.id
  })
  .exec(function(error, todo) {
    if (error) {
      console.log('error getting');
    } else {
      console.log(todo);
      res.json(todo);
    }
  })
});

// add new todo
api.post('/api/todos', function(req, res) {
  Todo.create(req.body, function(error, todo) {
    if (error) {
      res.send('error saving todo');
    } else {
      console.log(todo);
      res.send(todo);
    }
  });
});

// update todo
api.put('/api/todos/:id', function(req, res) {
  Todo.findOneAndUpdate({
    _id: req.params.id
  }, 
  {$set: {status: req.body.status}},
  {upsert: true },
  function(error, todo) {
    if (error) {
      console.log('error updating');      
    } else {
      console.log(todo);
      res.sendStatus(204);
    }
  });
});

// remove todo
api.delete('/api/todos/:id', function(req, res) {
  Todo.findOneAndRemove({
    _id: req.params.id
  }, function(error, todo) {
    if (error) {
      console.log('error deleting');      
    } else {
      console.log(todo);
      res.sendStatus(204);
    }
  })
});

// api listen
api.listen(port, function() {
  console.log('api listening on port ' + port);
});
