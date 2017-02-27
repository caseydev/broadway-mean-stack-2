//javascript callback example demo
function functionNameA(name,callback) {
  console.log('hello functionNameA');
  callback(name);
  console.log('end function call');

}

function functionNameD() {

}
function functionNamec() {

}


function functionNameB() {
  setTimeout(function () {
  }, 10);
  console.log('hello functionNameB');

}
functionNameA("abc",functionNamec);
