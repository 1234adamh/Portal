 function Person(firstName, lastName, dateOfBirth) {
 this.firstName = firstName;
 this.lastName = lastName;
 this.dateOfBirth = function(){
     return this.dateOfBirth;
 }
 }

const person1 = new Person("John","Doe","4-3-1980");
const person2 = new Person('Mary', 'Smith', '3-6-1970');


