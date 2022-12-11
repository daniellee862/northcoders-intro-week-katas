# Evaluation

Please make sure you **preview** this file in order to see it formatted properly
You can click right click on the file name at the top and then click Open Preview

## Motivation

For each question it would also be a good idea to provide a brief comment justifying your answer wherever possible.

---

## Question 0

Consider the code below:

```js
const arr = [];
arr[3] = "hi";
```

What will `arr.length` evaluate to?

a) `0`

b) `1`

c) `3`

d) `4`

I would say D. Because arrays are zero-based so the array index starts at zero, we assign "hi" to the index of 3 which would mean the index now contains four elements so the length would be 4. question 0 <------ clue in the question name.

## Question 1

Consider the code below:

```js
const letters = ["a", "b", "c"];
console.log(letters[2]);
console.log(letters[1]);
console.log(letters[0]);
```

Which order will the following `console.log`s appear?

a) `c`, `b`, `a`

b) `a`, `c`, `b`

c) `c`, `a`, `b`

d) `a`, `c`, `b`

ANSWER; A. The logs work from largest index to smallest.

---

## Question 2

What will be printed to the console in this example? 👉

```js
const items = ["hello", , , "there"];
console.log(items.length);
```

a) `2`

b) `3`

c) `4`

d) Won't work - will throw a `SyntaxError`

ANSWER C. I have come across this before, I cant remember exactly what the concept is, but I think it wa something along the lines of 'commas will create an empty value or contribute to the length of the array". It doesnt make any sence for it to be answers A OR B, and I dont think it will throw a syntax error based on my previous experience with it, so I will say ANSWER C

---

## Question 3

What will happen when the following block of code is ran:

This question is designed to make you think about breaking down complex expressions.
Hint: Start at the left-hand side of the expression when you're evaluating the expression below.

```js
const people = [["Marie Curie"], ["Albert Einstein"]];

console.log(people[0][0][1]);
```

a) `"M"` will be printed to the `console`

b) It will throw an error

c) `"C"` will be printed to the `console`

d) `"a`" will be printed to the `console`

ANSWER D; Three levels deep of notion will look like; PEOPLE >> ["MARIE CURIE"] > "MARIE CURIE" > "A". people[0][0][1] = nested array to string to second letter.

---

## Question 4

Consider the code below:

```js
const arr = [];
arr[100] = "X";
```

What will `arr.length` evaluate to?

a) `0`

b) `101`

c) `100`

d) `undefined`

## ANSWER B. similar to question 1. Assign value to index of 100, array is zero based, so it now contains 101 elements. the length would be 101.

## Question 5

**Part 1** What will happen when the following piece of code is executed?

```js
const emptyArray = [];
console.log(emptyArray[0]);
```

a) Will print `undefined`

b) Will print `0`

c) Will print `[]`

d) Will throw an `Error`

ANSWER A. I would say undefined because it is simply undefined. You wouldnt get 0 or []. you would get [] if you console.log(emptyArray). I dont think you would get an error in this instance, it would just log undefined to the console.

**Part 2** What will happen when the following piece of code is executed?

```js
const emptyArray = [];
console.log(emptyArray[0][1]);
```

a) Will print `undefined`

b) Will print `0`

c) Will print `[]`

d) Will throw an `Error`

Im not sure. The reason being is that emptyArray has been declared and initialised with an empty array, so emptyArray[0] would log undefined as you are attempting to access an undefined value in an array that exists. emptyArray[0][1] is now attempting to access a nested array within emptyArray, which we know doesnt exist in a different way to the first part of this question; it has not been declared or initialised...I think it is possible that it will throw an error, I am not sur what type of error.

---
