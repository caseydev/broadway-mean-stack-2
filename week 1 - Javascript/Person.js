function Person(name, surname, gender) {
   // Set default values
   this.name = name || 'madan';
   this.surname = surname || 'tmg';
   this.gender = gender || 'male';
   
   this.toString = function() {
      return 'My name is ' + this.name + ' ' + this.surname + ' and I am a ' + this.gender;
   }
};

// prints "My name is John Doe and I am a male"
console.log(new Person('John', 'Doe').toString());

// prints "My name is Aurelio De Rosa and I am a male"
console.log(new Person().toString());