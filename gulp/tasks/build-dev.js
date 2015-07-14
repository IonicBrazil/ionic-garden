var gulp = require('gulp');
var header = require('gulp-header');
var footer = require('gulp-footer');
var inject = require('gulp-inject');
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');
var config = require('../config').common;
var templateCache = require('gulp-angular-templatecache');

gulp.task('build-dev', ['build-dev:prepare-javascript', 'build-dev:inject-javascript', 'build-dev:copy-lib', 'styles']);

// Add IIFE to all JS Files and copy them to dest folder
gulp.task('build-dev:prepare-javascript', function(done) {
  gulp.src(config.allJSFiles)
    .pipe(plumber())
    .pipe(header(config.jsFilesHeader))
    .pipe(footer(config.jsFilesFooter))
    .pipe(gulp.dest(config.destBase + '/'))
    .pipe(connect.reload())
    .on('end', done)
});

gulp.task('build-dev:prepare-templates')

// Concat www/ionic-garden.js with www/templates.js
gulp.task('build-dev:javascript', ['build-dev:prepare-javascript', 'build-dev:prepare-templates'], function (done) {
  gulp.src(config.allHTMLFiles)
    .pipe(plumber())
    .pipe(inject(gulp.src('www/ionic-garden.js'),
                {starttag: '<!-- inject:ionic-garden -->',
                 endtag: '<!-- endinject:ionic-garden -->',
                 ignorePath: ['www']}))
    .pipe(gulp.dest('www/'))
    .pipe(connect.reload())
    .on('end', done)
})

// Inject JS Files into index.html
gulp.task('build-dev:inject-javascript', ['build-dev:javascript'], function (done) {
  gulp.src('www/index.html')
    .pipe(plumber())
    .pipe(inject(gulp.src(config.allJSFiles),
                    {starttag: '<!-- inject:js -->', ignorePath: ['src', 'www']}))
    .pipe(gulp.dest('www/'))
    .pipe(connect.reload())
    .on('end', done)
})

// Concat all template files and create the file www/templates.js
gulp.task('build-dev:prepare-templates', function (done) {
  gulp.src(config.allTemplates)
    .pipe(plumber())
    .pipe(templateCache({
      moduleSystem: 'IIFE',
      module: 'ionicGardenTemplates',
      standalone: true,
      filename: 'ionic-garden.js'
    }))
    .pipe(gulp.dest(config.destBase))
    .pipe(connect.reload())
    .on('end', done);
})
