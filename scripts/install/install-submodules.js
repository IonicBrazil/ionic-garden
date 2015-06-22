#!/usr/bin/env node

// It will install all package.json files found at `.gitmodules`
// Just run `npm run install`

var ted = require('../ted')
var findFiles = require('./install-search')
var installThem = require('./install-modules')

findFiles(null, installThem)
