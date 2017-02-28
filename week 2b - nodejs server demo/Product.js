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
module.exports = Product;
