const fs = require('fs');
const http = require('http');
const math = require('mathjs');
const express = require('express');
const Product = require('./Product');
console.log(math.round(math.e, 3));            // 2.718 );
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
var server=http.createServer(function(request,response){
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("hello nodejs server");
  response.end();
});
server.listen(3000,function (err) {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on 3000`)
})
