var gulp = require('gulp');
var header = require('gulp-header');
var footer = require('gulp-footer');
var inject = require('gulp-inject');
var config = require('../config').common;

gulp.task('js-prepare', function(done) {
  var jsFiles = gulp.src(config.allJSFiles);

  gulp.src(config.allHTMLFiles)
    .pipe(inject(jsFiles, {ignorePath: [config.src, config.destBase]}))
    .pipe(gulp.dest(config.destBase));

  jsFiles
    .pipe(header(config.jsFilesHeader))
    .pipe(footer(config.jsFilesFooter))
    .pipe(gulp.dest(config.destBase))
    .on('end', done);
});
