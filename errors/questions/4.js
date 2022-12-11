try {
  let person;
  person.name;
} catch (error) {
  console.log(error);
}

//reference error? trying to access something that is undefined, or maybe another type error.
//TypeError: Assignment to constant variable.
