'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');

gulp.task('sass', function () {
  gulp.src('./assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('singlecss', ['sass'], function () {
  return gulp.src([
      './assets/components/bootstrap/dist/css/bootstrap.min.css',
      './assets/components/fontawesome/css/font-awesome.min.css',
      './assets/css/*.css'
    ])
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('./assets'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./assets/scss/*.scss', ['singlecss']);
});

gulp.task('default', ['sass:watch']);
gulp.task('build', ['singlecss']);
