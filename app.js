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
  let defaultImageId = "";
  let image = "";
  let brand = req.body.brandSelect;
  let colour = "";
  let landline = "";
  let domain = "";
  let edomain = "";
  
  let name = fName + " " + lName;

  if (mobile === "") { 
    mobile = "";
   } else {
    mNumber = " | M: " + mobile;
  }

  //landline, domain, colour
  switch (brand) {
    case "ClinicalPRO":
      colour = "#0D5CAB";
      landline = "1800 628 999";
      domain = "@clinicalpro.com.au";
      edomain = domain;
      defaultImageId = "17Dm-5k6B2VWUnpXEKbeyTctADihiHRhh";
      break;

    case "Clinical Skincare":
      colour = "#F7941E";
      landline = "1800 628 999";
      domain = "@clinicalskincare.com.au";
      edomain = "@clinicalpro.com.au";
      defaultImageId = "1ainxJzUnt5wnl1IQxopDo669vZuxRENR";
      break;
    
      case "Clinical Therapies Laser Institute":
        colour = "#1B5BA7";
        landline = "1800 628 999";
        domain = "@laserinstitute.com.au";
        edomain = domain;
        defaultImageId = "1Euyl0VU2XkeUYhNsX2AdOzBQpoKhidqm";
        break;
      
      case "Beauty-Thru-Nature":
        colour = "#6D5180";
        landline = "(07) 3356 173";
        domain = "@beautythrunature.com.au";
        edomain = domain;
        email = "ask";
        defaultImageId = "1vzFulJwvpSH_VdSDqMha6V6d3DodRM5K";
        break;
  }

  if (imageId === "") {
    image = "https://drive.google.com/uc?export=view&id=" + defaultImageId;
  } else {
    image = "https://drive.google.com/uc?export=view&id=" + imageId;
  }

  function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }

 let sigHtml = escapeHtml("<h1>Test</h1>");

  res.render("generate", {sigHtml: sigHtml, name: name, title: title, email: email, edomain: edomain, mNumber: mNumber, image: image, colour: colour, landline: landline, domain: domain});
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});





// image id = 1rYtr-D7Ieb1YdaAni2rgo72tEY-VFLoD