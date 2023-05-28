// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define the route handler for "/home"
app.get('/home', (req, res) => {
  res.send('Welcome to the home page!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
