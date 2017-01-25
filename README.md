# Introduction
Full stack application development with front-end technologies

### Tech stacks

- Package Manager NodeJS: [nodejs](https://nodejs.org/en/)
-	REST API: [expressjs](http://expressjs.com/)
- Persistence storage: [mongoDB](https://www.mongodb.com/)
- AngularJS: [AngularJS](https://angularjs.org/)

## Backend setup and configuration

#### Installation
- Switch to api-server root and install all dependencies mentioned in `package.json`
```
$ npm install
```

#### Run DB server
- We will use [mongoDB](https://www.mongodb.com/) for persistence back-end data storage.
- [Install mongoDB](https://docs.mongodb.com/manual/installation/)
- Run mongoDB, start two terminal, one for mongoDB server and other for mongoDB shell
- First terminal (run mongoDB server)
```
$ mongond
```
- Second terminal (run mongoDB shell)
```
$ mongo
```
- Create new db `mydb` and new collection `todos`. In mongoDB we have collections in place of tables - [documentation](https://docs.mongodb.com/manual/core/data-modeling-introduction/)

#### Run api server
- Switch `fullstack-development/api-server` folder open terminal and type
```
$ nodemon
```

- Now you should able to see your api server running at [http://localhost:8080/](http://localhost:8080/)

## Front-end setup and configuration

#### Installation
- Switch to angular-app root and install all devDependencies mentioned in `package.json`.
- It will install gulp and required gulp packages for serving angular app
```
$ npm install
```

#### Server structure

	fullstack-development/
	--- api-server/
	------ api.js
	------ Todo.model.js
	------ package.json

#### Setup angular-app
- Basically we will be creating a simple todo application in angular and will consume REST api end-points offered by api-server running at [http://localhost:8080/](http://localhost:8080/).

#### App structure

	fullstack-development/
	--- angular-app/
	------ app/
	--------- scripts/
	------------ controllers/
	--------------- todo-list.controller.js
	--------------- todo-details.controller.js
	------------ services/
	--------------- todo.service.js
	------------ app.js
	--------- views/
	------------ todo-list.html
	------------ todo-details.html
	--------- styles/
	------------ styles.css
	--------- index.html
	--------- bower.json
	--------- gulpfile.js
	--------- package.json

#### Run application

- Lets run our app using `gulp`, open new terminal and type (Note our api server should be running)

```
$ gulp
```

You should be seeing an angular-app running, Create new todo and those will be start listing under Todo lists.
