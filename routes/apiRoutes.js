//used hot restaurant Activity
// Include fs module
var fs = require("fs");
var notes = require("../db/db.json");
//office hours
// const { v4 } = require("uuid");

//office hours
const { writeFileSynch } = require("fs");
// office hours
// const { join } = require("path");
// const { notStrictEqual } = require("assert");

// ROUTING

module.exports = (app) => {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/notes", (req, res) => {
    res.json(notes);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/notes", (req, res) => {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    //Will helped

    notes.push(req.body);

    fs.readFileSync("./db/db.json", JSON.stringify(notes));
    res.json(notes);
    // }
  });

  //dev.to/tejesh/nodejs
  // let notes1 = require("./db/db.json");

  // // using fs module to read json
  // const fs = require("fs");
  // let notes2 = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));

  // app.delete('/api/notes' , ()

  const deleteNote = (req, res) => {
    const { notes } = req.body;
    const { id } = req.body;
    const filteredNotes = notes.map((note) => note.id !== id);
    fs.writeFile(filterNotes);
  };
};
