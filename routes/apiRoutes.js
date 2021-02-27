//used hot restaurant Activity
// Include fs module
//HAD STUDY GROUP WITH JASMINE, WILL, MICHAEL, and TUTOR*

var fs = require("fs");
var notes = require("../db/db.json");

//office hours
const { v4: uuid } = require("uuid");
const { writeFileSynch } = require("fs");
const { join } = require("path");

// ROUTING
module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    //BSC tutor helped
    const notes = fs.readFileSync("./db/db.json", "utf-8");
    res.json(JSON.parse(notes));
  });

  app.post("/api/notes", (req, res) => {
    req.body.id = uuid("");
    notes.push(req.body);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    res.json(notes);
  });

  // _______________________________________ Trying to get note
  app.get("/api/notes", (req, res) => {
    let json = log(json);
    res.json(json);
  });

  // _________________________________________________________________trying new delete
  // API Delete
  // adding in the : passes in the id as a req.params since that is how the javascript front end is passing
  // it to the routes if you look at index.js line 47 ( in the public folder)
  app.delete("/api/notes/:id", function (req, res) {
    let deleteNote = req.params.id;
    //tutor helped with

    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
      let notes = JSON.parse(data);
      //tutor helped with filter method
      const filtered = notes.filter((note) => note.id !== deleteNote);

      fs.writeFile("./db/db.json", JSON.stringify(filtered), (err) => {
        if (err) throw err;
        res.sendStatus(204); // error on webpages GET caught goes away. server still running
      });
    });
  });
}; //end module.export

// ___________________________________________________________________________________________HARD WORK BELOW I wanted to keep.

// _______________________________________ Trying to delete note

// app.post("/api/clear", (req, res) => {
//   // server code for clearing out all the notes when clicked on in future release
//   const createNote = ({ title, text }) => {
//     return {
//       id: uuid(""),
//       title: data.title,
//       text: data.text,
//     };
//   };
//   res.json(createNote);
// });

// const deleteNote = (req, res) => {
//   // const { notes } = req.body;
//   const { id } = req.body;
//   const filteredNotes = notes.map((note) => note.id !== id);
//   fs.writeFile(filterNotes);
// };

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

// TOTOR HELP FOR DELETE
// have you checked out how the front end javascript file is passing the id back to the api routes?

//
// Looks like you are very close! But you'll want to pay attention to how the note is being passed in- if it's supposed to be a req.params it will have to be inside of the route - part of the path
// Then once that works- it will trigger the delete route- and then you should be able to console log deleteId --> if that is correct and shows the correct Id that you clicked on - then (as far as I can tell) the rest of the function is written correctly and removes the id
// I'll write out some next steps for you to try and get this one to work that are a little more specific

// _____________________
// Now need to get DOM to delete note
// As for how to delete and update, one approach for this would be to consider the chain of events happening when we click the delete. I would consider add more functionality here to handle the following:
// 1. delete the note with the delete request.
// 2. clear the DOM of all notes that were previously there.
// 3. Make a new fetch request to get all the updated notes list!
// Basically to update the DOM after we delete a note, we will need to make another GET request to get the updated notes.
