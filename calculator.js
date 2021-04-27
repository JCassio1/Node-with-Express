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

  console.log(req.body.number1);
  res.send("Got it. cheers, m8")
});


//Listening
app.listen(3000, function(){
  console.log("Server started in port 3000");
});
