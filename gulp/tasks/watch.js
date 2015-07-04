var gulp = require('gulp');
var exec = require('child_process').execFile

var config = require('../config').common;

gulp.task('watch', ['js-prepare', 'styles', 'source'], function() {
  gulp.watch(config.allSCSSFiles, ['styles']);
  gulp.watch(config.allStaticFiles, ['source']);
  gulp.watch(config.allJSFiles, ['js-prepare']);

  var child = exec('node ./scripts/watch/watch.js')

  child.stdout.on('data', console.log)
});
