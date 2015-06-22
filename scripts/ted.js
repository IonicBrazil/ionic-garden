#!/usr/bin/env node

// Ted is your best friend
var Ted = {}

// Arguments
var yargs = require('yargs')

// Elias
yargs.alias('r', 'recursive')

Ted.args = yargs.argv

// Colors to improve logs
Ted.say = require('colors')

// Colors Theme
Ted.say.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red',
  path: 'cyan',
  happy: 'green'
});

// Ted abort
Ted.abort = function () {
  Ted.say.error('Aborting :(')
}

module.exports = Ted
