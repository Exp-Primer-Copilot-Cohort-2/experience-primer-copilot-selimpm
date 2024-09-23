// create a web server that serves a list of comments
// to a client

// import the express library
const express = require('express');

// create an instance of the express server
const app = express();

// create a list of comments
const comments = [
  { name: 'John', comment: 'Hello!' },
  { name: 'Mary', comment: 'How are you?' },
  { name: 'Bob', comment: 'Goodbye!' }
];

// create a route for the comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// run the server with `node comments.js`
// open a browser and go to http://localhost:3000/comments
// you should see the list of comments

// to stop the server, press `Ctrl + C`
