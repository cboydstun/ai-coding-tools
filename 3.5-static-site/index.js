// Description: This file is the entry point of the application.
// express.js server
const express = require('express');

// create express app
const app = express();

const PORT = 8080;

// define a simple route
app.get('/hello-world', (req, res) => {
    res.json({ "message": "Hello World" });
});


// import data.js from the same folder
const data = require('./data');

// define a simple route that serves the data
app.get('/data', (req, res) => {
    res.json(data);
});

// render index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


// make server listen
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

