var express = require("express");
var app = express();

const MongoClient = require('mongodb').MongoClient;

const testRouter = require('./routers/test');

MongoClient.connect('mongodb://db', { minPoolSize: 20, maxPoolSize: 20 }, async (error, client) => {
  if (error) {
    console.log('error :', error);
  } else {
    // req.app.locals.dbでアクセスできるように設定
    app.locals.db = client.db('test_db');
    // add Router
    app.use('/test', testRouter);
    // start express server
    var server = app.listen(3000, function(){
      console.log("Node.js is listening to PORT:" + server.address().port);
    });
  }
})
