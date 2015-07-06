var gulp = require('gulp');
var appRoot = require('app-root-path')
var path = require('canonical-path')
var git = require('gulp-git');
var fs = require('fs');

var ionicProject = JSON.parse(fs.readFileSync(path.join(appRoot.path, 'ionic.project'), 'utf8'));

gulp.task('install-source-modules', function() {
  var array = Object.keys(ionicProject.sourceModules);

  array.forEach(function (propertyName) {
    console.log(
      'git clone',
      ionicProject.sourceModules[propertyName],
      path.join('modules', propertyName)
    );

    var cwd = path.join(appRoot.path, 'modules');
    var modulePath = path.join(cwd, propertyName);
    var directory = null;
    try {
      directory = fs.lstatSync(modulePath);
    } catch (e) {
      console.log('We\'re cloning your repo right now! Just wait.');
    }

    if (directory != null && directory.isDirectory()) {
      git.pull('origin', 'master', {cwd: modulePath, args: '--rebase'}, function (err) {
        if (err) throw err;

        console.log('Updated ', propertyName);
      });
    } else {
      git.clone(ionicProject.sourceModules[propertyName], {
        cwd: cwd
      }, function (err) {
        if (err) throw err;

        console.log('Cloned ', propertyName);
      });
    }
  })
});
