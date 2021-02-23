const express = require("express");
const path = require("path");

// Sets up the Express App
const app = express();

const PORT = process.env.PORT || 8080;

//finds folder
// app.use(express.static("public"));

//express app that takes data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//gets saved notes and put in db.json
// app.get("/api/notes", (req, res) => {
//   res.sendFile(path.join(__dirname, "/db/db.json"));
// });

//add notes to db.jason

//deleting notes

//calls the index.html. Star Wars Heruko activity
// Basic route that sends the user first to the AJAX Page
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "develop/public/index.html"))
);

//call notes.html
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "develop/public/notes.html"))
);

//used index.js to display all notes
app.get("/public/assets/js/index.js", (req, res) =>
  res.json(getAndRenderNotes)
);

// listen request
// Starts our server.
//changed server to app.listen
app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));
