
// normal javascript function
function funA(message){
  return message;
}
// literal object
var productL={
            title:"PA",
            price:200,
            discount:10
        };
console.log(productL.title)

// object using function constructor
function Product(title,price,discount){
  this.title=title;
  this.price=price;
  this.discount=discount;
  this.rate=200;
//  this.productImage=image;
  this.printtotalprice=function(){
    return "Discount is : " + this.price * this.discount;
  }
}

var productA=new Product("PA",100,10);
var productB=new Product("PB",200,10);
console.log(productA.title)
console.log(productA.price)
console.log(productA.printtotalprice())
console.log(funA("Hello this is function"))
console.log(productB.title)
console.log(productB.price)
var productC=new Product("PC",200,10);
productC.image="productimage.jpg";
console.log(productC.title)
console.log(productC.image)
//
Product.prototype.getProductimage=function(){
  return "This is a prototype result";
}
console.log(productC.getProductimage());
