#!/usr/bin/env node

var ted = require('../ted')
var exec = require('child_process').execFile
var gulp = require('gulp')
var batch = require('gulp-batch');

// What is going on log
console.log(
  ted.say.happy('Drops the bass'),
  ted.say.warn('->'),
  ted.say.happy('gulp watch')
)

gulp.watch(
  './modules/ionic/dist/{,*/}*.{js,css,scss,json,eot,svg,ttf,woff}',
  batch(function (event, cb) {
    process.stdout.write('ionic source changed')
    return gulp.src('./modules/ionic/dist/**')
      .pipe(gulp.dest('www/lib/ionic/build'))
  })
);

process.stdout.write(ted.say.happy('Watching Ionic source'))

exec('gulp', ['watch'], {
  cwd: './modules/ionic/'
})
