const express = require('express');
const path = require('path');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://heroku_gcqllm80:38ek24skubgto7pkei0g8d9oe7@ds153851.mlab.com:53851/heroku_gcqllm80";
var ObjectId = require('mongoose').Types.ObjectId; 



const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


app.use(express.static(path.join(__dirname, 'client/build')));

function toBool(string){
  switch(string.toLowerCase().trim()){
      case "true": case "yes": case "1": return true;
      case "false": case "no": case "0": case null: return false;
      default: return Boolean(string);
  }
}

app.get('/api/inbox/:query', (req, res) => {

  const query = JSON.parse(req.params.query);


  
  MongoClient.connect(url,  function(err, db) {

    if (err) throw err;
    var dbo = db.db("heroku_gcqllm80");

    dbo.collection("emails").find(query).toArray(function(err, emails) {
      if (err) throw err;

      res.json(emails.reverse());
      db.close();
      });
  });


});


app.get('/api/read/:emailId', (req, res) => {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("heroku_gcqllm80");

    dbo.collection("emails").findOne({ _id : new ObjectId(req.params.emailId) }, (function(err, email) {
      if (err) throw err;
      res.json(email);
      db.close();
    }));
  });

});


app.post('/api/star/:id', (req, res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("heroku_gcqllm80");
  
    dbo.collection('emails').update ({ _id : new ObjectId(req.params.id) },{ $set : { "starred": toBool(req.headers.starred) } }, function( err, result ) {
      if ( err ) throw err;
      res.json({Success: 'Sucessfully Updated'});
    });
  });
  
});


app.post('/api/compose', (req, res) => {

  const d = new Date();
  const month = monthNames[d.getMonth()];
  const day = d.getDate();
  const dateStr = month + " " + day;
  
  let emailComposed = {"sender": "bart@mail.com", "to": req.headers.email, "subject": req.headers.subject, "body": req.headers.content,
                       "starred": false, dateSent: dateStr , "read": false, "trash": false, 
                       "profilePic": "https://officialpsds.com/imageview/r6/v0/r6v0v1_large.png?1521316506" };

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("heroku_gcqllm80");
  
    dbo.collection('emails').insert (emailComposed, function( err, result ) {
      if ( err ) throw err;
      res.json({Success: 'Sucessfully Added'});
    });
  });


});


app.post('/api/trash/:id', (req, res) => {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("heroku_gcqllm80");
  
    dbo.collection('emails').update ({ _id : new ObjectId(req.params.id) },{ $set : { "trash": true } }, function( err, result ) {
      if ( err ) throw err;
      res.json({Success: 'Sucessfully Updated'});
    });
  });

});


app.post('/api/markRead/:id', (req, res) => {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("heroku_gcqllm80");
  
    dbo.collection('emails').update ({ _id : new ObjectId(req.params.id) },{ $set : { "read": false } }, function( err, result ) {
      if ( err ) throw err;
      res.json({Success: 'Sucessfully Updated'});
    });
  });

});



app.post('/api/read/:id', (req, res) => {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("heroku_gcqllm80");
  
    dbo.collection('emails').update ({ _id : new ObjectId(req.params.id) },{ $set : { "read": true } }, function( err, result ) {
      if ( err ) throw err;
      res.json({Success: 'Sucessfully Updated'});
    });
  });

});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


const port = process.env.PORT || 5000;
app.listen(port, () => `Server running on port ${port}`);
