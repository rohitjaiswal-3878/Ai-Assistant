const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const fs = require("fs");
const PORT = process.env.PORT || 3000;
const chatRoutes = require("./routes/chat");

// Initializations.
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/chat", chatRoutes);

// Handling Errors on server.
app.use((err, req, res, next) => {
  let log = `\n\n ${req.url} - ${req.method} - ${new Date().toISOString()} \n ${
    err.stack
  } `;
  fs.appendFile("error.txt", log, (err) => {
    if (err) {
      console.log(err);
    }
  });

  res
    .status(500)
    .json({ msg: "Something went wrong on server!", error: err.stack });
});
// Starting the server on respecte PORT.
app.listen(PORT, (err) => {
  if (!err) {
    console.log("Server up on port " + PORT);
  }
});
