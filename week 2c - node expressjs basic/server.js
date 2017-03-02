const express = require('express');
const app=express();
const viewpath=__dirname + "/views";
console.log(__dirname) // this give absolute path
// Get /
app.get("/",function (req,res){
  res.sendFile(viewpath + "/index.html");
});

app.get("/contact",function (req,res){
  res.sendFile(viewpath + "/contact.html");
});
app.post("/contact",function (req,res){
  res.send('Got a POST request');
});
app.get("/about",function (req,res){
  res.sendFile(viewpath + "/about.html");
});
app.listen(3000,function(){
  console.log("app listening on port 3000!");
});
