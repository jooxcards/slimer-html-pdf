var fs = require('fs')
var slimerHtmlPdf = require('../lib/index')

exports.renderPdf = function (test) {
  if (fs.existsSync('github.pdf')) {
    fs.unlinkSync('github.pdf')
  }
  slimerHtmlPdf('http://github.com', './github.pdf')
  .then(() => {
    test.ok(true, 'Successful')
    test.done()
  })
  .catch( err => {
    test.ok(false, err)
    test.done()
  })
}

exports.checkFileExists = function (test) {
  let fileExists = fs.existsSync('github.pdf')
  if (fileExists) {
    fs.unlinkSync('github.pdf')
  }
  test.ok(fileExists, 'Pdf file should have been created')
  test.done()
}
