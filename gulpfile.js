'use strict';

// Plugin imports
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');

// Converts SASS to CSS
gulp.task('sass', function () {
  gulp.src('./assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./assets/css'));
});

// Concat all needed CSS files
gulp.task('singleCss', ['sass'], function () {
  return gulp.src([
      './node_modules/bootstrap/dist/css/bootstrap.min.css',
      './node_modules/font-awesome/css/font-awesome.min.css',
      './assets/css/*.css'
    ])
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('./assets'));
});

// Make a copy of Fontawesome's fonts folder into assets folder
gulp.task('moveFonts', function () {
  return gulp.src('./node_modules/font-awesome/fonts/**/*')
    .pipe(gulp.dest('./fonts'));
});

// Watch for changes on SASS files
gulp.task('sass:watch', function () {
  gulp.watch('./assets/scss/*.scss', ['singleCss']);
});

// Main actions
gulp.task('default', ['sass:watch']);
gulp.task('build', ['singleCss', 'moveFonts']);
