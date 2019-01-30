const express = require("express");
const path = require("path");
const apiRoutes = require("./app/routing/apiRoutes");
const htmlRoutes = require("./app/routing/htmlRoutes");

// Define Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Set up data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up routes
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);


// Start server and begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  