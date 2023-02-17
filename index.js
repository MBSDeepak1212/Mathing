const express = require('express');
const app = express();

// Serve static files (CSS, JavaScript, images, etc.) from the "public" directory
app.use(express.static('public'));

// Define a route for the home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
