try {
  let person = "Foluso";
  var person = "Alex";
} catch (error) {
  console.log(error);
}

//We have already declared person...Referrence error!
// SyntaxError: Identifier 'person' has already been declared
//I identified the issue, but misjudged the actual error type.

//The identifier is only used to identify an entity uniquely in a program at the time
//of execution whereas, a variable is a name given to a memory location, that is used to hold a value.
//Variable is only a kind of identifier, other kinds of identifiers are function names, class names, structure names, etc.
