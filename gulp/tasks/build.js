var gulp = require('gulp');
var concat = require('gulp-concat');
var header = require('gulp-header');
var footer = require('gulp-footer');
var inject = require('gulp-inject');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');
var del = require('del');
var config = require('../config').common;
var templateCache = require('gulp-angular-templatecache');

gulp.task('build', ['style-guide', 'build:javascript', 'build:inject-javascript', 'styles', 'build-dev:copy-lib']);

// Concat all template files and create the file www/templates.js
gulp.task('build:prepare-templates', function (done) {
  gulp.src(config.allTemplates)
    .pipe(templateCache({
      moduleSystem: 'IIFE',
      module: 'ionicGardenTemplates',
      standalone: true
    }))
    .pipe(gulp.dest(config.destBase))
    .on('end', done);
})

// Concat all JS files
gulp.task('build:prepare-javascript', function(done) {
  gulp.src(config.allJSFiles)
    .pipe(header(config.jsFilesHeader))
    .pipe(footer(config.jsFilesFooter))
    .pipe(concat('ionic-garden.js'))
    .pipe(gulp.dest(config.destBase))
    .pipe(connect.reload())
    .on('end', done);
});

// Concat www/ionic-garden.js with www/templates.js
gulp.task('build:javascript', ['build:prepare-javascript', 'build:prepare-templates'], function (done) {
  gulp.src('www/{templates,ionic-garden}.js')
    .pipe(concat('ionic-garden.js'))
    .pipe(gulp.dest(config.destBase))
    .pipe(connect.reload())
    .on('end', function () {
      del('www/templates.js', done);
    });
})

// Inject `www/ionic-garden.js` into index.html
gulp.task('build:inject-javascript', ['build:javascript'], function (done) {
  gulp.src(config.allHTMLFiles)
    .pipe(inject(gulp.src('www/ionic-garden.js'), { ignorePath: ['src', 'www']}))
    .pipe(gulp.dest('www/'))
    .pipe(connect.reload())
    .on('end', done);
})
