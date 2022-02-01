// console.log('Fear is the mind killer.');

// SECTION VERBAL QUESTIONS:

// 1. What is the difference between a parameter and an argument?

  // Answer: The parameter is how the input is represented in the function when it is declared / defined. The argument is the input when the function is invoked/called.

// 2. Within a function, what is the difference between return and console.log?

    // Answer: Return stops the function and gives the function its value (provides the return value).

// 3. What are the implications of the ability of a function to return a value?

  // Answer: A return statement is needed for a function's OUTPUT VALUE to be passed as data, not console.log. 


// SECTION PALINDROME AGAIN:

const palindrome = (string) => {
  reverse = string.split('').reverse().join('').toLowerCase();
  return string.toLowerCase() === reverse ? true : false;

  // if (string.toLowerCase() === reverse)
  //   return true;
  // else
  // return false;
}


// SECTION - 3. Digit Sum

const digitSum = (inputNum) => {
  return [...(inputNum + "")].map(Number).reduce((a, b) => a + b, 0);
  // return nums.reduce((a,b) => a + b, 0);
}

// NOTE - syntax of solution above from: https://codehandbook.org/split-number-individual-digits-using-javascript/