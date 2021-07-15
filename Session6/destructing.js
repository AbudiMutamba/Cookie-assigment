
let a = 4;
let b = 2;

console.log(a);
console.log(b);

[a, b] = [b, a];
console.log(a);
console.log(b);

const person  = {
   'firstname' : 'David',
   'lastname' : 'Wampamba',
   'middlename' : 'Melbourn',
   'town' : 'kansanga'
}
//destructed variables
const { firstname, lastname } = person

console.log(firstname)

//None destructured variables
console.log(person["firstname"])
console.log(person.firstname)