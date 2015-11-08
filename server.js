var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var requestPromise = require('request-promise');
var superagent = require('superagent');

//Routes
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/:symbol', function (req, res) {
var symbol=req.params.symbol;
var options = {
  uri: 'http://finance.yahoo.com/webservice/v1/symbols/'+symbol+'/quote?format=json&view=detail',
  json:true
};
  requestPromise(options)
  .then(function (resp){
var relevantStockResources = resp.list.resources.filter(function(resource){
  return resource.resource.fields.symbol==symbol;}).map(function(resource){
    return {symbol:resource.resource.fields.symbol, price:resource.resource.fields.price, issuer:resource.resource.fields.issuer_name};
  })

    res.send(relevantStockResources[0]);
  })
  .catch(function (err) {
    console.log(err);
    res.send('Http request to yahoo threw error');
  })
});

app.get('/:symbol/historical', function (req, res) {
var symbol=req.params.symbol;
console.log("symbol: ", symbol);
superagent.get('http://query.yahooapis.com/v1/public/yql')
.query({//q:'SELECT * FROM yahoo.finance.historicaldata WHERE symbol='+symbol+' AND startDate="2015-01-01" AND endDate="2015-12-31";',
 q:'SELECT * FROM yahoo.finance.historicaldata WHERE symbol in ("'+symbol+'") AND startDate="2014-12-31" AND endDate="2015-12-31";',
 env:'store://datatables.org/alltableswithkeys',
 format:'json'})
.end(function(err, response){
  if(err){
    res.send({error:err});
  }
  else{
    var graphData = JSON.parse(response.text).query.results.quote.map(singleQuote=>(singleQuote.Close))
    res.send(graphData);
  }
})

});


var server = app.listen(8080, function () {
  var port = server.address().port;

  console.log('Example app available at: http://localhost:%s', port);
});
