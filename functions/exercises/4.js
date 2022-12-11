const { check, runTest } = require("../../test-api");

function capitaliseString(str) {
  // return the passed string as upper case
  return str.toUpperCase();
}

runTest("capitaliseString() can capitalise a single word", function () {
  check(capitaliseString("bang")).isEqualTo("BANG");
  check(capitaliseString("apple")).isEqualTo("APPLE");
  check(capitaliseString("abc")).isEqualTo("ABC");
});
