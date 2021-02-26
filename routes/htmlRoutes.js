// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
//tutor helped
//used Hot restaurant and Star Wars activities to help 

const path = require("path");

// ROUTING
module.exports = (app) => {
  // => HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content

  //call notes.html
  app.get("/notes", (req, res) => 
    res.sendFile(path.join(__dirname, "../public/notes.html"))
  );

  // If no matching route is found default to home. can keep * bc takes care of "/"
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
