
const path = require("path");
const mainDir = path.join(__dirname, "/public");

module.exports = (app) => {
  
    app.get("/notes", (req, res) => res.sendFile(path.join(mainDir, "notes.html")));

    app.get("/", (req, res) => res.sendFile(path.join(mainDir, "index.html")));
};