const express = require("express");
const app = express();
const port = 3000;

// Importing the diary routes
const diaryRoutes = require('./routes/diaryRoutes'); 

app.use(express.json()); // Middleware to parse JSON data
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded data

// Use the diary routes
app.use('/', diaryRoutes); 

// A simple route to test the server
app.get('/homepage', (req, res) => {
    res.send("Welcome to the Human Diary Online Application");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});