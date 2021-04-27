const express = require("express");

const app = express();

//Server routes
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html"); //__dirname. to get full path
});

app.get("/contact", function(req, res){
  res.send("Email me at joselsondias@hotmail.com");
});

app.post("/", function(req, res){
  res.send("Got it. cheers, m8")
});


//Listening
app.listen(3000, function(){
  console.log("Server started in port 3000");
});
