const { check, runTest } = require("../../test-api");

const items = [];

// your loop here...
for (let i = 0; i < 15; i += 2) {
  items.push(i);
}

// make sure you use +=, using i + 2 will create an error;

runTest("check the even numbers 0 to 14 are pushed into items", function () {
  check(items).isEqualTo([0, 2, 4, 6, 8, 10, 12, 14]);
});
