//creating javascript using class feature in ECMA6
class Product{
  constructor(title,price,discount){
    this.title=title;
    this.price=price;
    this.discount=discount;
  }
}
var product1=new Product("P1",200,10);
console.log(product1.title)

var product2=new Product("P2",200,10);
console.log(product2.title)

// string literal - concatenation demo
var name = "madan";
var x = `
My Name is ${name}.
My Profession is Software Team leader.
`;
console.log(x);
