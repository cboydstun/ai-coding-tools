const express = require('express');
const fetch = require('node-fetch'); // Use require without .default

// import cors
const cors = require('cors');

const app = express();

// Use cors
app.use(cors());

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

app.listen(8080, () => {
    console.log('Server listening on port 8080');
});
