process.env.NODE_ENV = 'test';
var http = require('http');
// get the application server module
var app = require('../app/app');

var Browser = require('zombie');

describe('homepage', function() {

  before(function() {
    this.server = http.createServer(app).listen(3000);

    this.browser = new Browser({ site: 'http://localhost:3000' })
  });

  before(function(done) {
    this.browser.visit('/', done);
  });

  it('should show search box', function() {
    });
});

