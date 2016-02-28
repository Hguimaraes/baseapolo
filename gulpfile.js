var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var nodemon = require('gulp-nodemon');
var concat = require('gulp-concat');
var ngmin = require('gulp-ngmin');

// transform the sass files into one css file
gulp.task('sass', function () {
  return sass('./public/assets/scss/style.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('./public/assets/css'));
});

// process JS files and return the stream.
gulp.task('js', function () {
  return gulp.src([
    'public/assets/js/*.js',
    'public/app/*.js',
    'public/app/**/*.js'])
    .pipe(ngmin({
      dynamic: true
    }))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public'));
});

// watch for changes and restart the server
gulp.task('nodemon', function (cb) {

  var started = false;

  return nodemon({
      script: 'server.js',
      env: {
        'NODE_ENV': 'development'
      },
      ext: 'js html css',
      verbose: false,
      ignore: [
      'gulpfile.js',
      'node_modules',
      'public/libs',
      '.sass-cache'
    ]
    }).on('start', function () {
      // to avoid nodemon being started multiple times
      if (!started) {
        cb();
        started = true;
      }
    });
});

gulp.task('watch', function() {
    gulp.watch("./public/assets/scss/*.scss", ['sass']);
    gulp.watch("public/assets/js/*.js", ['js']);
    gulp.watch("public/app/**/*.js", ['js']);
});

gulp.task('build-dev', ['sass', 'js'], function(){
    
});

gulp.task('default', ['build-dev', 'watch', 'nodemon'], function() {
    
});