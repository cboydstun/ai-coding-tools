const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.get('/posts', async (req, res) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    
    // Render the posts data as a response
    res.send(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving posts');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});