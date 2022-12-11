try {
  const letters = "abc";
  letters(); // <- How would you describe what we're trying to do to letters here ? :🤔
} catch (error) {
  console.log(error, "<--- error");
}

//We are trying to invoke letters, but it is not a funciton, it is a string. TYPE ERROR!
