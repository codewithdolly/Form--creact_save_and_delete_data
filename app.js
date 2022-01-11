const md_url = process.env.md_url;
const PORT = 4000;

const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//Express App
const app = express();
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

//connecting mongoose
mongoose.connect(
  "mongodb+srv://heydollysingh:cdufp8mviyB7Lmk@cluster0.vfyvz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

// Home - render the form
app.get("/", function (req, res) {
  res.render("form.ejs");
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const projectCoordinate = new Schema({
  id: ObjectId,
  title: String,
  coords: String,
  shape: String,
});

//Creating Model
const Coordinate = mongoose.model("Coordinate", projectCoordinate);
console.log(Coordinate);
// create a coordinate post
var codata = new Coordinate();

// receiving data from submitted form
app.post("/submit-data", function (req, res) {
  //print body
  console.log(req.body);

  //save in db
  codata = req.body;

  Coordinate.create(codata, (err, createdData) => {
    if (err) {
      console.log(err);
    } else {
      console.log("data inserted successfully" + createdData);
      res.redirect("/data"); //send a respose  that data is saved in DB
    }
  });
});

app.get("/data", (req, res) => {
  Coordinate.find((err, Coordinates) => {
    if (!err) {
      console.log("data found" + Coordinates);
      res.render("data.ejs", { Coordinates: Coordinates });
    } else {
      console.log(err);
    }
  });
});

app.listen(PORT, console.log("server started on port " + PORT));
