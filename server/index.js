const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the client directory
const clientPath = path.join(__dirname, '..', 'client'); // Adjust the path accordingly
app.use(express.static(clientPath));

// Route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(clientPath, 'gatherInfo.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
