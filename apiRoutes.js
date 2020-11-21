const path = require("path");
const fs = require("fs");

module.exports = (app) => {
  
    app.get("/api/notes", (req, res) => res.sendFile(path.join(__dirname, "/db/db.json")));
    
   app.get("/api/notes/:id", (req, res) => {
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json"));
    res.json(savedNotes[Number(req.params.id)]);
});


app.post("/api/notes", (req, res) => {
  
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json"));    
    let newNote = req.body;  
    let uniqueID = (savedNotes.length).toString();
    newNote.id = uniqueID;   
    savedNotes.push(newNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
    console.log("Note successfully saved");
    res.json(savedNotes);
})


app.delete("/api/notes/:id", (req, res) => {
 
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json"));   
    let noteID = req.params.id;  
    let newID = 0;
    console.log(`Note: ${noteID} successfully deleted`);
    savedNotes = savedNotes.filter(currNote => {
        return currNote.id != noteID;
    })
    
    
    for (currNote of savedNotes) {
        currNote.id = newID.toString();
        newID++;
    }

    
    fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
    res.json(savedNotes);
})
}