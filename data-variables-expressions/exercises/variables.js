//Task One

//string
const firstName = "Daniel";
console.log(firstName, typeof firstName);
//string
const lastName = "Clough";
console.log(lastName, typeof lastName);
//number
const age = 36;
console.log(age, typeof age);
//boolean
const hasPets = false;
console.log(hasPets, typeof hasPets);
// string
const email = "danielleeclough86@hotmail.co.uk";
console.log(email, typeof email);

////////////////////////////////////////////////////////
//Task Two
const message = `Hello my name is ${firstName} ${lastName}, I am ${age} years old.`;
console.log(message, typeof message);

const initials = `${firstName[0]} and ${lastName[0]}`;
console.log(initials, typeof initials);

const fullName = `${firstName} ${lastName}`;
console.log(fullName, typeof fullName);

const petInfo = hasPets ? "I have pets" : "I dont have pets but want a dog";
console.log(petInfo, typeof petInfo);
