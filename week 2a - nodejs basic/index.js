const fs = require('fs');//this is built-in module
const http = require('http');// this is built-in module
const math = require('mathjs'); // this is third party module : use npm install mathjs --save
const express = require('express');// this is third party module
const Product = require('./Product');// this is custom module class
// log output from Mathjs module
console.log(math.round(math.e, 3));            // 2.718
// log output from product js
var P1=new Product("PA",100,10);
console.log(P1.printtotalprice());
console.log(P1.title);
console.log("price" + P1.price);

var P2=new Product("P2",200,08)
// nodejs reading file
fs.readFile("test.txt",function(err,data) {
if(err){
  console.log("error reading file" + err);
}
else{
  console.log(data.toString());
}
});
//nodejs creating server
// var path = url.parse(request.url).pathname;
var server=http.createServer(function(request,response){
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("hello client i ma sending response from nodejs server");
  response.end();
});
server.listen(3000,function (err) {
  if (err) {
     console.log('something bad happened', err)
  }
  console.log(`server is listening on 3000`)
})
