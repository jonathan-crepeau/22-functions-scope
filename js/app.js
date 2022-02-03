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


// SECTION 4. Pythagoras

const calculateSide = (sideA, sideB) => {
  return Math.sqrt((sideA**2) + (sideB**2));
}


// SECTION 5. Sum Array
// NOTE - No .reduce() method

const sumArray = (numArray) => {
  let sum = 0;
  for (let a = 0; a < numArray.length; a++) {
    sum += numArray[a];
  }
  return sum;
}


// SECTION 6. Prime Numbers

// 1. Write a function called checkPrime that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not. Hint: Check every number up to the square root. To do this, try a for loop.

const isPrime = num => {
  for(let i = 2, s = Math.floor(Math.sqrt(num)); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

// NOTE - https://stackoverflow.com/questions/5811151/why-do-we-check-up-to-the-square-root-of-a-prime-number-to-determine-if-it-is-pr explains why we only need to check up to the square root of the number, not check all the way up to the number itself.

// 2. Write another function called printPrimes that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with printPrimes(97), it will print all the Prime numbers up to and including 97. This function can call on the previous checkPrime function.

// NOTE - Sychronous Callback function (isPrime):

const printPrimes = (number, fn) => {
  let primes = [];
  for (let a = 2; a <= number; a++) {
    if (fn(a)) { 
      primes.push(a);
    }
  }
  return primes;
}

// NOTE - Without Callback.
// The issue is when I start to get 's' values in the inner loop greater than 2 (meaning the inner loop will run MORE than just one instance). 9 is the first positive whole integer that will cause the inner loop to run TWO times. Therefore, when (a % b === 0) is (9 % 2 === 0), it skips to the 'else' statement and pushes '9' into the primes array. However, when the inner lop runs a second time, (a % b === 0) is (9 % 3 === 0), which is true and means 9 IS an even number. However, we already added it to the primes array on the first run of the inner loop when (b = 2), so the logic is incorrect.

// const primesNoCB = (num) => {
//   let primes = [];
//   for (let a = 0; a < num; a++) {

//     for (let b = 2, s = Math.floor(Math.sqrt(a)); b <= s; b++) {
//       if (a % b === 0) {
//         console.log(a + ' is even!');
//       } else {
//         primes.push(a);
//         console.log('Skipped if statement, pushed ' + a + 'into array!');
//       }
//     }

//   }
//   return primes;
// }
