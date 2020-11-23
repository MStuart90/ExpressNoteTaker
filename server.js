
const express = require("express");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 8000
// const mainDir = path.join(__dirname, "/public");


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./apiRoutes')(app);
require('./htmlRoutes')(app);

app.listen(PORT, () => console.log('App listening on PORT:' + PORT));