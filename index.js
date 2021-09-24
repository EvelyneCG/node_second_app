const express     = require("express");
const bodyParser  = require("body-parser");
const mongoose = require("mongoose");
const uri = "mongodb+srv://secretevy:822159@cluster0.na3ue.mongodb.net/Cluster0";
const db = mongoose.connect(uri);

db.pets = require("./models/Pet.js");
module.exports = db;

const app = express();

app.use(bodyParser.json());

require("./models/Pet")(app);
require("./routes/petRoutes")(app);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running`);
});