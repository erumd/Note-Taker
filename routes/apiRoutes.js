//used hot restaurant Activity
// Include fs module
//https://www.youtube.com/watch?v=yFnXF-w2XI0&ab_channel=JohnCosper
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
    req.body.id = uuid("");
    //ORIGINAL CODE MESSING WITH
    notes.push(req.body);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    res.json(notes);

    // notes.push(req.body);
    // fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    // // if (err) throw err;
    // notesdb = notes;
    // res.send(notesdb);
  });

  // _______________________________________ Trying to get note
  app.get("/api/notes", (req, res) => {
    console.log("api get notes");
    let json = log(json);
    res.json(json);
  });

  // _______________________________________ Trying to delete note

  app.post("/api/clear", (req, res) => {
    // server code for clearing out all the notes when clicked on in future release
    const createNote = ({ title, text }) => {
      return {
        id: uuid(""),
        title: data.title,
        text: data.text,
      };
    };
    res.json(createNote);
  });
};

// const deleteNote = (req, res) => {
//   // const { notes } = req.body;
//   const { id } = req.body;
//   const filteredNotes = notes.map((note) => note.id !== id);
//   fs.writeFile(filterNotes);
// };

// _________________________________________________________________trying new delete
// API Delete
// app.delete("/api/notes", function (req, res) {
//   let deleteID = req.params.id; //tutor helped with

//   // read file and parse
//   fs.readFile("./db/db.json", (err, data) => {
//     if (err) throw err;
//     let notes = JSON.parse(data);
//     // tutor.splice
//     for (let i = 0; i < notes.length; i++) {
//       if (notes[i].id === deleteID) {
//         notes.splice(i, 1);
//       }
//     }
//   });
// });

// // re-write file
// fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
//   if (err) throw err;
//   notes2 = notes;
//   res.send(notes2);
// });

// app.post("/api/notes", (req, res) => {
//   const newNotes = req.body;
//   notesData.push(req.body);
//   // writeToJSONfile();
//   res.json(notes);
//

// [{"title":"Test Title","text":"Test Text","id":1}]

// tutor to write new notes
// So in you code you use
// .setAttribute("readonly", true);
// 12:43
// This is fine if we just want to view a note, but if you want to edit a note you will need to be able to type into the textarea
// New
// 12:45
// So perhaps the steps I would take are to
// 1. use .setAttribute("readonly", false); to make the textfield editable
// 2. in your post "/api/notes" route check the id of the note the user has sent
// 3. if that id matches any id that is in db.json you will want to replace that note rather than push a new note
// 12:45
// After that your note should be editable! :slightly_smiling_face: