function User(fname,lname,address){
  this.firstname=fname;
  this.lastname=lname;
  this.address=address;
  this.getFullDetails=function() {
    return `I am ${this.firstname} ${this.lastname} from ${this.address}`;
    //return "I am  " + this.fitname + " " + this.lastname + " from " + this.address;
  }
}

module.exports=User;
