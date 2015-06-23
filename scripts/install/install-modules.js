#!/usr/bin/env node

var ted = require('../ted')
var sh = require('shelljs')
var path = require('path')
var exec = require('child_process').execFile

// Install an array of submodules with package.json
var installModules = function (paths, whatTheyAre) {
  paths.forEach(function (path, index) {
    installModule(path)
  })
}

// Installed a single module dependencie based on Path
var installModule = function (modulePath) {

  var cwd = path.dirname(modulePath)
  //Hackish solution for windows users - npm isn't recognized as a executable, but npm.cmd is!
  var npm = (process.platform === "win32" ? "npm.cmd" : "npm")

  // What is going on log
  console.log(
    ted.say.happy('npm install'),
    ted.say.warn('->'),
    ted.say.happy(cwd)
  )

  var installing = exec(npm, ['install', '-d', '-s'], {
    cwd: cwd
  }, function (err, out, erout) {
    // Good output
    if (out) {
      console.log(ted.say.debug(out))
    }

    // Bad output
    if (err) {
      console.log(ted.say.error(err))
    }
  })

  // When everything is done, tell me what happened
  installing.on('close', function (exit, error) {
    if (exit === 0 && !error) {
      console.log(cwd, ted.say.happy('done'))
    }

    if (error) {
      console.log(ted.say.error(error))
    }
  })
}

module.exports = installModules
