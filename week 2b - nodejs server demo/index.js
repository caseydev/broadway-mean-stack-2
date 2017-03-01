const fs = require('fs');//this is built-in module
const http = require('http');// this is built-in module
const math = require('mathjs'); // this is third party module : use npm install mathjs --save
const Product = require('./Product');// this is custom module class
const url = require('url');
// log output from Mathjs module
console.log(math.round(math.e, 3));            // 2.718
// log output from product js
var P1=new Product("PA",100,10);
console.log(P1.printtotalprice());
console.log(P1.title);
console.log("price" + P1.price);
//nodejs creating server
// var path = url.parse(request.url).pathname;
var server=http.createServer(function(request,response){
let reqUrl=url.parse(request.url).pathname;
console.log(url.parse(request.url).pathname);
let filename="index.html";
  switch (reqUrl) {
      case "/about":
        filename="about.html"
        break;
      case "/contact":
        filename="contact.html"
        break;
      default:
        filename="index.html";
    }
  response.writeHead(200, {"Content-Type": "text/html"});
  //  reading html file to send response
  fs.readFile(filename,function(err,data) {
  if(err){
    response.writeHead(400);//404 error
    response.write("error reading file" + err);
  }
  else{
      response.write(data.toString());//send html data to client

  }
  response.end();
  });
});
server.listen(3000,function (err) {
  if (err) {
     console.log('something bad happened', err)
  }
  console.log(`server is listening on 3000.Browse localhost:3000`)
})
