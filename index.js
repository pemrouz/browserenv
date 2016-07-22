var client = require('utilise/client')
  , document

if (!client) {
  global.window = require('jsdom').jsdom('<div>').defaultView
  global.document = document = window.document
} else {
  document = window.document
}

module.exports = document