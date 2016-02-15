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
    http = require('http'),
    https = require('https');

describe('/', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:8080', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });

  it('title should be "Stock Quotes and Recco Toy App"', function (done) {
    http.get('http://localhost:8080', function (res) {
      var data = '';

      res.on('data', function (chunk) {
        data += chunk;
      });

      res.on('end', function () {
        assert(data,"Stock Quotes and Recco Toy App");
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
  //JerJohn15 - Checks for base and rates from open exchange api
  it('should retrieve open exchange rates api data', function(done){
    https.get(
      'https://openexchangerates.org/api/latest.json?app_id=f7beb6b41bde4fabaa01f5bd5e459d8c'
    ,
    function(res){
      var data = '';
      res.on('data', function(chunk){
        data+=chunk;
      });
      res.on('end', function(){
        assert.equal('USD', JSON.parse(data).base);
        assert(JSON.parse(data).rates.EUR);
        assert(JSON.parse(data).rates.JPY);
        assert(JSON.parse(data).rates.GBP);
        done();
      })
    })
})
});
