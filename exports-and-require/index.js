const somethingFromFile1 = require("./examples/file-1");
// "vel"
//correct

const somethingFromFile2 = require("./examples/file-2");
// { tutor: tutor } object
// incorrect - { tutor: 'Vel' } - the value wouldnt be tutor because it is a variable that contains the string "vel"

const somethingFromFile3 = require("./examples/file-3");
//function print hello, uninvoked
//correct - [Function: printHello] - tells you whatit is and its identifier

const somethingFromFile4 = require("./examples/file-4");
//function add. the funciton has no executable code in the body
//incorrect - { add: [Function: add] } - you get the object with the key and the value which is the function: add

const somethingFromFile5 = require("./examples/file-5");
//{ printHello: printHello, add: add } object
//correct - except it tells you the type of the value { printHello: [Function: printHello], add: [Function: add] }

const somethingFromFile6 = require("./examples/file-6");
//empty file could cause a reference error
//AN EMPTY OBJECT, of course....you just get the empty module.exports object; module is an object and module.exports starts as an object which you can change

// console.log();
