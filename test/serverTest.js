var server = require('../server');

describe('server', function () {
  before(function () {
    server.listen(8080);
  });

  after(function () {
    server.close();
  });
});


var assert = require('assert'),
    http = require('http');

describe('/', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:8080', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });

  it('title should be Stock Toy', function (done) {
    http.get('http://localhost:8080', function (res) {
      var data = '';

      res.on('data', function (chunk) {
        data += chunk;
      });

      res.on('end', function () {
        assert(data.indexOf("Stock Toy")!=-1);
        done();
      });
    });
  });

  it('should retrieve symbol and price quote', function(done) {
    http.get('http://localhost:8080/AAPL', function (res){
      var data = '';
      res.on('data', function (chunk){
        data+=chunk;
      });
      res.on('end', function() {
        assert.equal('AAPL', JSON.parse(data).symbol);
        assert.equal('Apple Inc.', JSON.parse(data).issuer);
        done();
      })
    })
    http.get('http://localhost:8080/YHOO', function (res){
      var data = '';
      res.on('data', function (chunk){
        data+=chunk;
      });
      res.on('end', function() {
        assert.equal('YHOO', JSON.parse(data).symbol);
        assert.equal('Yahoo! Inc.', JSON.parse(data).issuer);
        done();
      })
    })
  })
});
