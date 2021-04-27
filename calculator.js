const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//Server routes
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html"); //__dirname. to get full path
});

app.get("/contact", function(req, res){
  res.send("Email me at joselsondias@hotmail.com");
});

app.post("/", function(req, res){

  var number1 = Number(req.body.number1);
  var number2 = Number(req.body.number2);

  var result = number1 + number2;

  res.send("Quick!!! Your result is " + result);
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res){

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var result = weight / Math.pow(height,2);

  res.send("Quick!!! Your BMI is " + result);
});


//Listening
app.listen(3000, function(){
  console.log("Server started in port 3000");
});
