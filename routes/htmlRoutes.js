const path = require("path");

// ROUTING
module.exports = (app) => {

  //call notes.html
  app.get("/notes", (req, res) => 
    res.sendFile(path.join(__dirname, "../public/notes.html"))
  );

  // If no matching route is found default to home. can keep * bc takes care of "/"
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
