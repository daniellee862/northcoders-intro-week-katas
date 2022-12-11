try {
  person;
  let person = "Foluso";
} catch (error) {
  console.log(error);
}

//Im not sure what this one will do. If I hover over person on line 2, it tells me that its a string. but we are trying to use it before it has been declared so I would say reference error.

//ReferenceError: Cannot access 'person' before initialization
