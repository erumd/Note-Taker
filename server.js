const express = require("express");
// const path = require("path");
// const getAndRenderNotes = require("./public/assets/js/index");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

//express app that takes data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// require("./db/db.json")(app);

//gets saved notes and put in db.json
// app.get("/api/notes", (req, res) => {
//   res.sendFile(path.join(__dirname, "/db/db.json"));
// });

//calls the index.html. Star Wars Heruko activity
// Basic route that sends the user first to the AJAX Page
// app.get("/", (req, res) =>
//   res.sendFile(path.join(__dirname, "/public/index.html"))
// );

//call notes.html
// app.get("/notes", (req, res) =>
//   res.sendFile(path.join(__dirname, "/public/notes.html"))
// );

//used index.js to display all notes
// app.get("/public/assets/js/index.js", (req, res) =>
//   res.json(getAndRenderNotes)
// );

// listen request
// Starts our server.
//changed server to app.listen
app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));
