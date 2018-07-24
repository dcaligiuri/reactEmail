const express = require('express');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://heroku_5mtfkq7c:qc1llnqr20sgls8baomkgn5pi@ds143511.mlab.com:43511/heroku_5mtfkq7c";
var ObjectId = require('mongoose').Types.ObjectId; 

const app = express();

function toBool(string){
  switch(string.toLowerCase().trim()){
      case "true": case "yes": case "1": return true;
      case "false": case "no": case "0": case null: return false;
      default: return Boolean(string);
  }
}

app.get('/api/inbox/:query', (req, res) => {


  const query = JSON.parse(req.params.query);
 
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("heroku_5mtfkq7c");

    dbo.collection("emails").find(query).toArray(function(err, emails) {
      if (err) throw err;
      res.json(emails);
      db.close();
      });
  });


});


app.post('/api/star/:id', (req, res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("heroku_5mtfkq7c");
  
    dbo.collection('emails').update ({ _id : new ObjectId(req.params.id) },{ $set : { "starred": toBool(req.headers.starred) } }, function( err, result ) {
      if ( err ) throw err;
      res.json({Success: 'Sucessfully Updated'});
    });
  });
  
});



app.post('/api/read/:id', (req, res) => {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("heroku_5mtfkq7c");
  
    dbo.collection('emails').update ({ _id : new ObjectId(req.params.id) },{ $set : { "read": true } }, function( err, result ) {
      if ( err ) throw err;
      res.json({Success: 'Sucessfully Updated'});
    });
  });

});



const port = 5000;

app.listen(port, () => `Server running on port ${port}`);