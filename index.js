global.window = require('jsdom').jsdom('<div>').defaultView
global.document = window.document