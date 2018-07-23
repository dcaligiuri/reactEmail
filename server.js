const express = require('express');

const app = express();

app.get('/api/inbox', (req, res) => {
  const emails = [
    {id: 1, profilePic: null, sender: 'john@mail.com', subject: 'John is coming to the party', body: 'John is coming to the party', starred: false, dateSent: 'Jan 1' },
    {id: 2, profilePic: null, sender: 'steve@mail.com', subject: 'Steve is coming to the party', body: 'Steve is coming to the party', starred: false, dateSent: 'Jan 1' },
    {id: 3, profilePic: null, sender: 'bill@mail.com', subject: 'Bill is coming to the party', body: 'Bill is coming to the party', starred: false, dateSent: 'Dan 1' },
    {id: 4, profilePic: null, sender: 'john@mail.com', subject: 'John is coming to the party', body: 'John is coming to the party', starred: false, dateSent: 'Jan 1' },
    {id: 5, profilePic: null, sender: 'steve@mail.com', subject: 'Steve is coming to the party', body: 'Steve is coming to the party', starred: false, dateSent: 'Jan 1' },
    {id: 6, profilePic: null, sender: 'bill@mail.com', subject: 'Bill is coming to the party', body: 'Bill is coming to the party', starred: false, dateSent: 'Dan 1' },
    {id: 7, profilePic: null, sender: 'john@mail.com', subject: 'John is coming to the party', body: 'John is coming to the party', starred: false, dateSent: 'Jan 1' },
    {id: 8, profilePic: null, sender: 'steve@mail.com', subject: 'Steve is coming to the party', body: 'Steve is coming to the party', starred: false, dateSent: 'Jan 1' },
    {id: 9, profilePic: null, sender: 'bill@mail.com', subject: 'Bill is coming to the party', body: 'Bill is coming to the party', starred: false, dateSent: 'Dan 1' },
  ];

  res.json(emails);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);