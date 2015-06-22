#!/usr/bin/env node

// It'll search for package.json files in a given directory
var ted = require('../ted')
var sh = require('shelljs')
var blog = require('glob')

// @opt
//  @opt.cwd - Directory to use, default is `./modules`

// @callback is called with
//  @files Array of results
//  @whatTheyAre string `file` or `files`, depends on @files.length
var findModulesAndReturnPaths = function (opt, callback) {
  opt = opt || {}
  opt.cwd = opt.cwd || './modules'

  // Hello log
  console.log(
    ted.say.happy('Humm let me see your'),
    ted.say.path(opt.cwd),
    ted.say.happy('folder')
  )

  blog(opt.cwd + '/{,*/}package.json', {}, function (err, files) {
    // I'm not sure if it need a comment, but it's an error
    // I don't know how to simulate
    if (err) {
      console.log(ted.say.error('Something went really wrong here'))

      console.log(ted.say.error(err))

      process.exit(1)
    }

    // Did not found anything
    if (files.length === 0) {
      console.log(
        ted.say.warn('Weird:'),
        'I did not found any',
        ted.say.path('package.json')
      )

      ted.abort()

      return
    }

    var whatTheyAre = (files.length === 1)? 'file' : 'files'

    // Tell me what you found Ted
    console.log(
      ted.say.happy('I found'),
      ted.say.data(files.length),
      ted.say.happy(whatTheyAre)
    )

    console.log(ted.say.data(files))

    callback(files, whatTheyAre)
  })
}

module.exports = findModulesAndReturnPaths
