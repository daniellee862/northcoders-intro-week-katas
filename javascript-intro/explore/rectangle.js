// Print a 20 x 30 rectangle - the rectangle should be filled with *s

// You should only need to use .repeat() and console.log() for this task :)

//declare variables
const asterix = "*";
const space = " ";
const topAndBottom = `${asterix.repeat(20)}`;
const middle = `${asterix}${space.repeat(18)}${asterix}`;

//function for multiple logs
const rectangle = () => {
  console.log(topAndBottom);
  for (let i = 1; i <= 28; i++) {
    console.log(middle);
  }
  console.log(topAndBottom);
};

//call function to print
rectangle();
