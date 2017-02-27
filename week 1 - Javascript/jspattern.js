// Module Revealing pattern demo
var counterTest=(function(){
  var counter=0;
function privatefun(){

};
function getCounter(){
  privatefun();
 return counter;
};
function incrementCounter(){
return  counter++;
};
  return {
  showcounter:getCounter,
  growcounter:incrementCounter
  }
})();
//counterTest.counter=10;
console.log(counterTest.growcounter())
console.log(counterTest.growcounter())
console.log(counterTest.showcounter())
