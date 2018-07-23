const express = require('express');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://heroku_5mtfkq7c:qc1llnqr20sgls8baomkgn5pi@ds143511.mlab.com:43511/heroku_5mtfkq7c";

const app = express();

app.get('/api/inbox', (req, res) => {
 
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("heroku_5mtfkq7c");

    dbo.collection("emails").find({}).toArray(function(err, emails) {
      if (err) throw err;
      res.json(emails);
      db.close();
      });
  });


  

});


app.post('/api/inbox', (req, res) => {
  
});

/*
 const emails = [
    {profilePic: 'http://www.simpsoncrazy.com/content/characters/ralph.gif', sender: 'ralph@mail.com', subject: 'John is coming to the party. John is coming to the party', body: 'John is coming to the party. John is coming to the party', starred: false, dateSent: 'Sep 1', read: false },
    {profilePic: 'https://avatarfiles.alphacoders.com/693/69306.jpg', sender: 'homer@mail.com', subject: 'Steve is coming to the party. Steve is coming to the party', body: 'Steve is coming to the party. Steve is coming to the party', starred: false, dateSent: 'Jan 1', read: true },
    {profilePic: 'https://pbs.twimg.com/profile_images/378800000397721422/0071eee76a16649a4a1a7ac45aad407c_400x400.jpeg', sender: 'lisa@mail.com', subject: 'Bill is coming to the party. Bill is coming to the party', body: 'Bill is coming to the party. Bill is coming to the party', starred: false, dateSent: 'Sep 1', read: true },
    {profilePic: 'http://photos1.blogger.com/blogger/2932/510/400/milhouse_smiling.gif', sender: 'milhouse@mail.com', subject: 'John is coming to the party. John is coming to the party', body: 'John is coming to the party. John is coming to the party', starred: false, dateSent: 'Jan 1', read: false },
    {profilePic: 'http://www.simpsoncrazy.com/content/characters/ralph.gif', sender: 'ralph@mail.com', subject: 'John is coming to the party. John is coming to the party', body: 'John is coming to the party. John is coming to the party', starred: false, dateSent: 'Sep 1', read: false },
    {profilePic: 'https://avatarfiles.alphacoders.com/693/69306.jpg', sender: 'homer@mail.com', subject: 'Steve is coming to the party. Steve is coming to the party', body: 'Steve is coming to the party. Steve is coming to the party', starred: false, dateSent: 'Jan 1', read: true },
    {profilePic: 'https://pbs.twimg.com/profile_images/378800000397721422/0071eee76a16649a4a1a7ac45aad407c_400x400.jpeg', sender: 'lisa@mail.com', subject: 'Bill is coming to the party. Bill is coming to the party', body: 'Bill is coming to the party. Bill is coming to the party', starred: false, dateSent: 'Sep 1', read: true },
    {profilePic: 'http://photos1.blogger.com/blogger/2932/510/400/milhouse_smiling.gif', sender: 'milhouse@mail.com', subject: 'John is coming to the party. John is coming to the party', body: 'John is coming to the party. John is coming to the party', starred: false, dateSent: 'Jan 1', read: false },
  ];


*/


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);