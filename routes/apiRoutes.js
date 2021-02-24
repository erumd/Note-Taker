// Include fs module
var fs = require("fs");
var notes = require("../db/db.json");

// ROUTING

module.exports = (app) => {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/notes", (req, res) => {
    res.json(notes);
    console.log(notes);
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
    if (notes.length) {
      notes.push(req.body);
      res.json(true);
    } else {
      notes.push(req.body);
      res.json(false);
    }
  });

  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", (req, res) => {
    // Empty out the arrays of data
    notes.length = 0;
    // waitListData.length = 0;

    res.json({ ok: true });
  });
};

//delete the notes
// app.delete
