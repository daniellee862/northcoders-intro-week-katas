try {
  let person;
  person.name = "Alex";
} catch (error) {
  console.log(error);
}

//TYPE ERROR. person is declared but not initialised with any variable or as any type.
//TypeError: Assignment to constant variable.
