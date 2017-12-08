var Horseman = require('node-horseman');
var co = require('co');

var options = {
  loadImages: false,
  ignoreSSLErrors: true,
  timeout: 3000,
  injectJquery: true,
  phantomOptions: {
    'ignore-ssl-errors': true,
    'debug': true
  }
};

var userAgent = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36';
var _url = "https://www.google.com.br/";


var countlinks = co.wrap(function*() {
  var horseman = new Horseman(options)

  yield horseman.userAgent(userAgent)
  yield horseman.open(_url)
  yield horseman.type('input[name="q"]', 'blablablawrqwe')
  return tercerize(horseman);
});


var tercerize = co.wrap(function*(horseman){
  yield horseman.click('input[type="submit"]:nth-child(1)')
  yield horseman.waitForNextPage()

  let numlinks = yield horseman.count("a")
  console.log('+ durante = ', numlinks)

  yield horseman.close()

  return numlinks;
});

module.exports = {
    countlinks: countlinks
}