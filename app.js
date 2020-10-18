//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const e = require("express");
const { includes } = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/instructions", function(req, res) {
  res.render("instructions");
});

app.get("/new", function(req, res) {
  res.render("new");
});

app.get("/signature", function(req, res) {
  res.render("signature");
});

app.post("/generate", function(req, res) {
  let fName = req.body.fName;
  let email = _.lowerCase(fName);
  let lName = req.body.lName;
  let title = req.body.title;
  let mobile = req.body.mobile;
  let mNumber = "";
  let imageId = req.body.imageId;
  let image = "";
  
  let name = fName + " " + lName;

  if (mobile === "") { 
    mobile = "";
   } else {
    mNumber = " | M: " + mobile;
  }

  if (imageId === "") {
    image = "https://drive.google.com/uc?export=view&id=" + "17Dm-5k6B2VWUnpXEKbeyTctADihiHRhh";
  } else {
    image = "https://drive.google.com/uc?export=view&id=" + imageId;
  }

  res.render("generate", {name: name, title: title, email: email, mNumber: mNumber, image: image});
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});





// image id = 1rYtr-D7Ieb1YdaAni2rgo72tEY-VFLoD