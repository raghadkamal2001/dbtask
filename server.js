
const express = require("express");
const Db = require("./main.js"); // Import the database connection

const app = express();
const PORT = 4000;


// Start the Server
app.listen(PORT, () => {
  console.log( `Server running on http://localhost:${PORT}`);
});