const { check, runTest, skipTest } = require("../../test-api");

/*
Instructions

For these challenges complete the body of each function in turn.
Run this file with Node to run the tests and check your function works correctly.
Take a look at the tests to see what each function should be returning given various arguments.
When you're ready to move on to the next function replace skipTest with runTest.
*/

function getLastItem(arr) {
  // This function should take an array as an argument and return the last item from it
  return arr.pop();
}

runTest("getLastItem() returns the last item in an array", function () {
  check(getLastItem(["a", "b", "c", "d"])).isEqualTo("d");
  check(getLastItem(["apple", "banana", "pear", "kiwi"])).isEqualTo("kiwi");
});

function getLastNItems(arr, n) {
  // This function should take two arguments, an array and a number n, and return a new array containing the last n items of the given array

  const lastItems = arr.slice(-n);
  return n === 0 ? [] : lastItems;
}

runTest("getLastNItems() returns the last n items in an array", function () {
  check(getLastNItems(["a", "b", "c", "d"], 2)).isEqualTo(["c", "d"]);
  check(getLastNItems(["apple", "banana", "pear", "kiwi"], 0)).isEqualTo([]);
  check(getLastNItems(["apple", "banana", "pear", "kiwi"], 3)).isEqualTo(["banana", "pear", "kiwi"]);
});

function removeItem(arr, n) {
  // This function should take two arguments, an array and a number n, and return a new array without the item at index 'n'
  // const removedItem = arr.splice(n, 1);
  // return arr;

  //technically not a new array? we can do better:
  let brandSpankingNewArray = [];

  arr.map((item, index) => {
    if (index !== n) {
      brandSpankingNewArray.push(item);
    }
  });

  return brandSpankingNewArray;
}

runTest("removeItem() removes an item at a given index", function () {
  check(removeItem(["a", "b", "c", "d"], 2)).isEqualTo(["a", "b", "d"]);
  check(removeItem(["a", "b", "c", "d"], 0)).isEqualTo(["b", "c", "d"]);
  check(removeItem(["a", "b", "c", "d"], 1)).isEqualTo(["a", "c", "d"]);
});

function mergeArrays(arr1, arr2) {
  // This function should take two arrays as arguments and return a new array containing all of arr1 and arr2's elements (in that order)

  return arr1.concat(arr2);
}

runTest("mergeArrays() will concatenate two arrays together", function () {
  check(mergeArrays(["a", "b"], ["c", "d"])).isEqualTo(["a", "b", "c", "d"]);
  check(mergeArrays([1], [3, 5, 7])).isEqualTo([1, 3, 5, 7]);
  check(mergeArrays(["x", "y", "z"], [1, 2, 3, 4])).isEqualTo(["x", "y", "z", 1, 2, 3, 4]);
});

function getSandwichFilling(sandwich) {
  // If an array is like a sandwich, the first and last items are the bread
  // This function should take an array as an argument and return an array containing the filling of the sandwich
  sandwich.pop();
  sandwich.shift();
  return sandwich;
}

runTest("getSandwichFilling() returns the inner elements of an array", function () {
  check(getSandwichFilling(["a", "b", "c", "d"])).isEqualTo(["b", "c"]);
  check(getSandwichFilling([10, 20, 30, 40, 50, 60])).isEqualTo([20, 30, 40, 50]);
  check(getSandwichFilling(["northcoders", "are", "the", "best"])).isEqualTo(["are", "the"]);
});

function isEmptyArray(arr) {
  // This function should take an array as an argument and return true if the array is empty, and false otherwise
  return arr.length === 0 ? true : false;
}

runTest("isEmptyArray() checks if an array is empty", function () {
  check(isEmptyArray([])).isEqualTo(true);
  check(isEmptyArray(["a", "b", "c", "d"])).isEqualTo(false);
  check(isEmptyArray(["a"])).isEqualTo(false);
});

function howManyArguments(...allOfTheParams) {
  // This function should take any number of arguments and return the number of arguments passed into the function
  // HINT: For this one you should look up 'rest parameters' online - MDN Web Docs and devdocs are excellent sources of JavaScript documentation

  //I thought ... was the spread operator?  whats the difference between this and destructuring?

  /*   The difference between rest parameters and the arguments object
There are three main differences between rest parameters and the arguments object:

The arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort(), map(), forEach() or pop() can be applied on it directly.
The arguments object has the additional (deprecated) callee property.
In a non-strict function with simple parameters, the arguments object syncs its indices with the values of parameters. The rest parameter array never updates its value when the named parameters are re-assigned.
The rest parameter bundles all the extra parameters into a single array, but does not contain any named argument defined before the ...restParam. The arguments object contains all of the parameters — including the parameters in the ...restParam array — bundled into one array-like object. */

  return allOfTheParams.length;
}

runTest("howManyArguments() returns the number of items passed on a single call", function () {
  check(howManyArguments("a", "b", "c")).isEqualTo(3);
  check(howManyArguments()).isEqualTo(0);
  check(howManyArguments(1, 2, 3, 4, 5)).isEqualTo(5);
  check(howManyArguments("the", "meaning", "of", "life", "is", 42)).isEqualTo(6);
});

function updatePosition(coords, direction) {
  /*
  This function should take an array representing coordinates - an x position and a y position - and a string representing a direction, and it should return a new pair of coordinates, with the coords array updated by moving either x or y 1 unit in a particular direction

  If direction is "up" it should move 1 unit up (+ 1 in the y direction)
  If the direction is "down" it should move 1 unit down (- 1 in the y direction)
  If the direction is "right" it should move 1 unit right (+ 1 in the x direction)
  If the direction is "left" it should move 1 unit left (- 1 in the x direction)
  */

  const up = () => {
    coords[1] += 1;
  };
  const down = () => {
    coords[1] -= 1;
  };
  const left = () => {
    coords[0] -= 1;
  };
  const right = () => {
    coords[0] += 1;
  };

  switch (direction) {
    case "up":
      up();
      break;
    case "down":
      down();
      break;
    case "left":
      left();
      break;
    case "right":
      right();
      break;
    default:
      break;
  }

  return coords;
}

runTest("updatePosition() updates a co-ordinates array", function () {
  check(updatePosition([10, 10], "up")).isEqualTo([10, 11]);
  check(updatePosition([0, 0], "down")).isEqualTo([0, -1]);
  check(updatePosition([3, 3], "left")).isEqualTo([2, 3]);
  check(updatePosition([7, 50], "right")).isEqualTo([8, 50]);
});

function addCoins(collection, coin) {
  /*
  In this function, a "coin collection" is represented by an array containing 4 other nested arrays, each representing a slot in the collection in the following way:
   1p   2p   5p   10p
  [[],  [],  [],  []] <-- coinCollection

  This should take two arguments, a coin collection array and a string representing a coin, and return an updated version of the given array with the coin added at the appropriate position
  */

  switch (coin) {
    case "1p":
      collection[0].push(coin);
      break;
    case "2p":
      collection[1].push(coin);
      break;
    case "5p":
      collection[2].push(coin);
      break;
    case "10p":
      collection[3].push(coin);
      break;
    default:
      break;
  }

  return collection;
}

runTest("addCoins() will update the coins in a given slot", function () {
  check(addCoins([[], [], [], []], "1p")).isEqualTo([["1p"], [], [], []]);
  check(addCoins([[], [], [], []], "2p")).isEqualTo([[], ["2p"], [], []]);
  check(addCoins([[], ["2p"], [], []], "2p")).isEqualTo([[], ["2p", "2p"], [], []]);
  check(addCoins([[], [], [], []], "5p")).isEqualTo([[], [], ["5p"], []]);
  check(addCoins([["1p"], [], [], ["10p", "10p"]], "2p")).isEqualTo([["1p"], ["2p"], [], ["10p", "10p"]]);
  check(addCoins([[], [], ["5p", "5p"], []], "5p")).isEqualTo([[], [], ["5p", "5p", "5p"], []]);
});

function accessItem(arr, index) {
  /* 
  This function should take two arguments, an array and an index, and return the element at that specified index

  The index provided may be equal to or greater than the length of the given array. In this case, rather than counting past the end of the array where there are no values, the indexing should be considered to "loop back around" and continue from the start of the array

  For examples of this behaviour, look at the second group of tests below
  */

  //two funcs
  // return conditional invocation of funcs

  const lessThanLength = () => {
    const less = arr.splice(index, 1);
    return less[0];
  };

  const equalOrGreater = () => {
    //get the remainder of index after its looped however many times it needs to
    const modulo = index % arr.length;
    console.log(modulo);
    //just splice one element at the index of the modulo remainder
    const greater = arr.splice(modulo, 1);
    //return the string not the array its in
    return greater[0];
  };

  //if index is larger then arr's length call a function that takes into account how many theoretical loops it has made, if its less just splice.

  return index < arr.length ? lessThanLength() : equalOrGreater();
}

runTest("accessItem() can access an item inside in an array with a given index below the array length", function () {
  check(accessItem(["a", "b", "c", "d"], 2)).isEqualTo("c");
  check(accessItem(["a", "b", "c", "d"], 0)).isEqualTo("a");
  check(accessItem(["a", "b", "c", "d"], 3)).isEqualTo("d");
});

runTest(
  "accessItem() can access an item inside in an array with an index equal to or above the array length",
  function () {
    check(accessItem(["a", "b", "c", "d"], 4)).isEqualTo("a");
    check(accessItem(["a", "b", "c", "d"], 6)).isEqualTo("c");
    check(accessItem(["a", "b", "c", "d"], 10)).isEqualTo("c");
    check(accessItem(["a", "b", "c", "d"], 11)).isEqualTo("d");
  }
);

function findDayOfTheWeek(num) {
  // This function should take a number from 1 to 7 inclusive, and return a string of the corresponding day of the week

  //TURN OFF BEST PRACTICES
  //......ACTIVATE......MEGABRAIN!!!!!!!!!
  const daysOfWeek = {
    1: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    2: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    3: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    4: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    5: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    6: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    7: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    8: ["Ground", "Hog", "Day", "Best", "Christ", "Mas", "Movie"],
  };

  const megabrainIndex = (num - 1) * 2;

  return num && daysOfWeek[num][megabrainIndex / 2];
}

runTest("findDayOfTheWeek() returns the day of the week given a passed number", function () {
  check(findDayOfTheWeek(2)).isEqualTo("Tuesday");
  check(findDayOfTheWeek(3)).isEqualTo("Wednesday");
  check(findDayOfTheWeek(1)).isEqualTo("Monday");
  check(findDayOfTheWeek(6)).isEqualTo("Saturday");
  check(findDayOfTheWeek(7)).isEqualTo("Sunday");
});
