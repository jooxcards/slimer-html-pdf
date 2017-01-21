const page = require('webpage').create(),
      system = require('system')

var settings = JSON.parse(system.args[1])

for (var property in settings) {
  if (settings.hasOwnProperty(property)) {
    page[property] = settings[property]
  }
}

var address = system.args[2]
var output = system.args[3]

page.open(address, function() {
  page.render(output, {format: 'pdf'})
  phantom.exit()
})
