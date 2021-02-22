const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;


//finds folder
app.use(express.static('public'));

//express app that takes data 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//gets saved notes and put in db.json
app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"))
});

//add notes to db.jason 

