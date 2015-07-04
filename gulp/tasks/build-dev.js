var gulp = require('gulp');
var header = require('gulp-header');
var footer = require('gulp-footer');
var inject = require('gulp-inject');
var newer = require('gulp-newer');
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');
var config = require('../config').common;

gulp.task('build-dev', ['build-dev:prepare-javascript', 'build-dev:inject-javascript', 'build-dev:copy-lib', 'build-dev:copy-templates']);

// Add IIFE to all JS Files and copy them to dest folder
gulp.task('build-dev:prepare-javascript', function(done) {
  gulp.src(config.allJSFiles)
    .pipe(header(config.jsFilesHeader))
    .pipe(footer(config.jsFilesFooter))
    .pipe(gulp.dest(config.destBase + '/'))
    .pipe(connect.reload())
    .on('end', done)
});

// Inject JS Files into index.html
gulp.task('build-dev:inject-javascript', ['build-dev:prepare-javascript', 'build-dev:prepare-templates'], function (done) {
  gulp.src(config.allHTMLFiles)
    .pipe(inject(gulp.src(config.allJSFiles), { ignorePath: ['src', 'www']}))
    .pipe(gulp.dest('www/'))
    .pipe(connect.reload())
    .on('end', done)
})


// Inject JS Files into index.html
gulp.task('build-dev:prepare-templates', function (done) {
  gulp.src(config.allTemplates)
    .pipe(gulp.dest('www/'))
    .pipe(connect.reload())
    .on('end', function () {
      gulp.src('www/index.html')
    })
})
