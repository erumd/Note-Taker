//used hot restaurant Activity
// Include fs module
var fs = require("fs");
var notes = require("../db/db.json");

//office hours
const { v4: uuid } = require("uuid");
const { writeFileSynch } = require("fs");
const { join } = require("path");

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

    // }
    //create note with uuid

    // res.json(createNote);

    notes.push(req.body);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    res.json(notes);
  });

  app.post("/api/clear", (req, res) => {
    // server code for clearing out all the notes when clicked on in future release
    const createNote = ({ title, text }) => {
      return {
        id: uuid(),
        title,
        text,
      };
    };
    res.json(createNote);
  });
};

const deleteNote = (req, res) => {
  // const { notes } = req.body;
  const { id } = req.body;
  const filteredNotes = notes.map((note) => note.id !== id);
  fs.writeFile(filterNotes);
};

// API call for deleting a note from the list or array
// app.delete("/api/notes/:id", (req, res) => {
//   const deleteID = req.params.id;
//   for (let i = 0; i < notes.length; i++) {
//     if (deleteID === notes[i].id) {
//       notesData.splice(i, 1);
//       // writeToJSONfile();
//     }
//   }
//   res.end();
// });

// app.post("/api/notes", (req, res) => {
//   const newNotes = req.body;
//   notesData.push(req.body);
//   // writeToJSONfile();
//   res.json(notes);
// });
