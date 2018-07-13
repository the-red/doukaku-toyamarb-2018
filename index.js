#!/usr/bin/env node
'use strict'

const doukaku = require('./lib/doukaku')
const argv = process.argv.slice(2)
const result = doukaku(...argv)
console.log(result)
