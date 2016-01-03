require('utilise')
global.d3 = require('d3')
global.window = require('jsdom').jsdom('<div>').defaultView
global.document = window.document
global.HTMLElement = window.HTMLElement