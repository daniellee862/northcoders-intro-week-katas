try {
  const name = "mitch";
  name = "Izzi";
} catch (error) {
  console.log(error);
}

//This will be a type error, as name is declared as a constant.
//TypeError: Assignment to constant variable.
