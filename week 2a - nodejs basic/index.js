const fs = require('fs');
const http = require('http');
var math = require('mathjs');
const express = require('express');
//import Product from "./Product"
const Product = require('./Product');
console.log(math.round(math.e, 3));            // 2.718 );
var P1=new Product("PA",100,10);
console.log(P1.printtotalprice());
console.log(P1.title);
console.log("price" + P1.price);

var P2=new Product("P2",200,08)

fs.readFile("test.txt",function(err,data) {
if(err){
  console.log("error reading file" + err);
}
else{
  console.log(data.toString());
}
});

http.createServer(function(request,response){
  response.write("hello nodejs server");
  response.end();
}).listen(3000);
