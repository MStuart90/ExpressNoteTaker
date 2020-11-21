//dependencies
const path = require("path");
const mainDir = path.join(__dirname, "/public");

module.exports = (app) => {
    //HTML route for note page
    app.get("/notes", (req, res) => res.sendFile(path.join(mainDir, "notes.html")));

    //HTML route for main page
    app.get("/", (req, res) => res.sendFile(path.join(mainDir, "index.html")));
};