var gulp = require('gulp');
var inject = require('gulp-inject');
var webserver = require('gulp-webserver');
var naturalSort = require("gulp-natural-sort");
var runSequence = require('run-sequence');

var appBaseUrl = 'http://localhost:8000/app/index.html';

gulp.task('inject', function () {
  var target = gulp.src('./app/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths: 
  var sources = gulp
    .src(['./bower_components/angular/angular.js',
          './bower_components/angular-route/angular-route.js', 
          './bower_components/angular-resource/angular-resource.js', 
          './app/**/*.js', 
          './bower_components/bootstrap/dist/css/bootstrap.css',
          './app/**/*.css'
          ], {
            read: false
          })
    .pipe(naturalSort());
 
  return target
    .pipe(inject(sources))
    .pipe(gulp.dest('./app'));
});

gulp.task('serve', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: appBaseUrl
    }));
});

gulp.task('default', function() {
  // place code for your default task here
  runSequence(
    'inject',
    'serve'
  );  
});