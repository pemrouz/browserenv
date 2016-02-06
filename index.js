var client = require('utilise/client')

if (!client) {
  global.window = require('jsdom').jsdom('<div>').defaultView
  global.document = window.document
}