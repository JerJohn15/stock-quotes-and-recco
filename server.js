var express = require('express');
var app = express();

var requestPromise = require('request-promise');

//Routes
app.get('/', function (req, res) {
  res.send("putYahooAPIResponseHere");
});

app.get('/:symbol', function (req, res) {
  console.log("in symbol path");
  var symbol=req.params.symbol;
  console.log("symbol: ", symbol);
  console.log('http://finance.yahoo.com/webservice/v1/symbols/'+symbol+'/quote?format=json&view=detail');
var options = {
  uri: 'http://finance.yahoo.com/webservice/v1/symbols/'+symbol+'/quote?format=json&view=detail',
  json:true
};
  requestPromise(options)
  .then(function (resp){

var relevantStockResources = resp.list.resources.filter(function(resource){
  return resource.resource.fields.symbol=="AAPL";}).map(function(resource){
    return {symbol:resource.resource.fields.symbol, price:resource.resource.fields.price, issuer:resource.resource.fields.issuer_name};
  })

    res.send(relevantStockResources[0]);
  })
  .catch(function (err) {
    console.log(err);
    res.send('Http request to yahoo threw error');
  })
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
