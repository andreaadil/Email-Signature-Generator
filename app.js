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
  res.render("new");
});

app.post("/generate", function(req, res) {
  let fName = req.body.fName;
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
  let feat1 = "";
  let feat2 = "";
  let feature1 = "";
  let feature2 = "";
  let url1 = "";
  let url2 = "";
  let facebookURL = "";
  let instagramURL = "";
  let linkedInURL = "";
  let mapsURL = "";
  let linkedIn = "";
  
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
      domain = "clinicalpro.com.au";
      defaultImageId = "17Dm-5k6B2VWUnpXEKbeyTctADihiHRhh";
      feat1 = "1SdBRM2aWy3sdMFn7acy-5syyT_L8ay8x";
      feat2 = "19fJt5mr51L30TmvgbrW3K5S0kLhgdD2H";
      url1 = "cp1";
      url2 = "cp2";
      facebookURL = "https://www.facebook.com/clinicalpro.com.au/";
      instagramURL = "https://www.instagram.com/clinicalpro.com.au/";
      linkedInURL = "https://www.linkedin.com/company/clinicalpro";
      mapsURL = "https://www.clinicalpro.com.au/contact-us/";
      break;

    case "Clinical Skincare":
      colour = "#F7941E";
      landline = "1800 628 999";
      domain = "clinicalskincare.com.au";
      defaultImageId = "1ainxJzUnt5wnl1IQxopDo669vZuxRENR";
      feat1 = "1Kz0F86d2vM3uWSwTVauuklQW1WstTg3c";
      feat2 = "1QgSb_4rNz_9S1shYdbc1S8LEZVKMoNuV";
      url1 = "cs1";
      url2 = "cs2";
      facebookURL = "https://www.facebook.com/clinicalskincare.com.au";
      instagramURL = "https://www.instagram.com/clinicalskincare.au/";
      linkedInURL = "https://www.linkedin.com/company/clinicalpro";
      mapsURL = "https://www.clinicalskincare.com.au/contact-us/";
      break;
    
      case "Clinical Therapies Laser Institute":
        colour = "#1B5BA7";
        landline = "1800 628 999";
        domain = "laserinstitute.com.au";
        defaultImageId = "1Euyl0VU2XkeUYhNsX2AdOzBQpoKhidqm";
        feat1 = "1N55MXnrNCFnhr2EQAFK2BLSxdk-gX8Ca";
        feat2 = "1bqUZ_UgdrgTIxH-frkbwTXbWETx1bhID";
        url1 = "ctli1";
        url2 = "ctli2";
        facebookURL = "https://www.facebook.com/ctlaserinstitute";
        instagramURL = "https://www.instagram.com/clinicalpro.com.au/";
        linkedInURL = "https://www.linkedin.com/company/clinicalpro";
        mapsURL = "https://www.laserinstitute.edu.au/contact-us/";
        break;
      
      case "Beauty-Thru-Nature":
        colour = "#6D5180";
        landline = "(07) 3356 173";
        domain = "beautythrunature.com.au";
        defaultImageId = "1vzFulJwvpSH_VdSDqMha6V6d3DodRM5K";
        facebookURL = "https://www.facebook.com/beautythrunature.alderley.qld";
        instagramURL = "https://www.instagram.com/btnalderley/";
        mapsURL = "https://www.beautythrunature.com.au/contact/";
        break;
  }

  if (imageId === "") {
    image = "https://drive.google.com/uc?export=view&id=" + defaultImageId;
  } else {
    image = "https://drive.google.com/uc?export=view&id=" + imageId;
  }
  
  if (brand === "Beauty-Thru-Nature") {
    feature1 = "";
    feature2 = "";
    linkedIn = "";
  } else {
    feature1 = "https://drive.google.com/uc?export=view&id=" + feat1;
    feature2 = "https://drive.google.com/uc?export=view&id=" + feat2;
    linkedIn = '<a href="<%= linkedInURL %>"><img style="height:18px; margin: 10px 10px 5px 0;" src="https://drive.google.com/uc?export=view&id=1TqHXX5sNMbgZesZ5uJXUAIlzC2Wq4G_2"></a>';
  }

  function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }

  res.render("generate", {name: name, title: title, mNumber: mNumber, image: image, colour: colour, landline: landline, domain: domain, feature1: feature1, feature2: feature2, url1: url1, url2: url2, facebookURL: facebookURL, instagramURL: instagramURL, linkedInURL: linkedInURL, mapsURL: mapsURL, linkedIn: linkedIn});
})

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
