const express = require('express');
const app=express();
app.get("/",function (req,res){
  res.sendFile("index.html");
})
app.get("/contact",function (req,res){
  res.sendFile("contact.html");
})
app.post("/contact",function (req,res){
  res.send('Got a POST request');
})
app.get("/about",function (req,res){
  res.sendFile("about.html");
})
app.listen(3000,function(){
  console.log("app listening on port 3000!");
});
