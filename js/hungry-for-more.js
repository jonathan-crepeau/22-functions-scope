
// SECTION 2. Insert Dash

// 1. Write a function insertDash that accepts a number as a parameter and returns a string with a dash inserted between any consecutive odd numbers. There should not be a dash at the end, it goes only between numbers.

// console.log(insertDash(454793));
// => 4547-9-3

// is odd

const insertDash = (number) => {
  // save number to variable to assign / reassign value.
  let nums = '';
  // transform number into string
  [...(nums + '')];
  // iterate through the individual digits of the number
  // individually, identify if odd
  // if odd: (1st attempt - every odd number returned or augmented to string with dash attached ('3-'). (2nd Attempt - no dash AFTER the last consecutive odd digit.)
  return nums;
}


// number to array, split array, iterate through the individual digits of the array, identify odd, make changes to odd, join

// NOTE - Validate type of argument supplied:

const inputType = (argument) => {
  if (typeof argument === 'number')
    console.log('It\'s a number');
  else if (typeof argument === 'string')
    console.log('It\'s a string.');
  else 
    console.log('It\'s not a number');
}

// NOTE - understanding Array.isArray() method:

const arrayMethod = (input) => {
  if (!Array.isArray(input))
    console.log('You\'re argument must be an array!');
}

// map method
  // iterate through, if odd, add dash

// NOTE - Don't fuck with a good thing:
// const dashTake2 = (num) => {
//   let nums = String(num).split("");
//   for (let a = 0; a < nums.length; a++)
//     if (nums[a] % 2 !== 0) {
//       nums[a] += '-';
//     }
//   console.log(nums);
// }

// REVIEW - "First Draft" Solution

const dashTake2 = (num) => {
  let nums = String(num).split("");
  for (let a = 0; a < nums.length; a++)
    if (nums[a] % 2 !== 0 && nums[a + 1] % 2 !== 0 && nums[a] != nums[nums.length - 1]) {
      nums[a] += '-';
    }
  nums = nums.join('');
  console.log(nums);
}

// if (nums[a] % 2 !== 0 && )
// for last odd number, some sort of conditional statment (blah blah && placement isn't array[array.length - 1]);


// SECTION - 3. Reverse String

// 1. Write a function reverseString that takes a string as a parameter and returns that string with the letters reversed without using .split(), .reverse(), or .join().

const reverseString = (inputString) => {
  let string = '';
  for (let a = inputString.length - 1; a >= 0; a--) {
    string = string + inputString[a];
  }
  return string;
}


// SECTION 4. Updated Palindrome

// 1. Make your palindrome function from problem two above work regardless of spacing (or capitalization). So, for example, "Sit on a potato pan Otis" or "Bird rib" would pass the test.

let sentence = "Today I am working on my coding.";

// NOTE - Using a substring as the first parameter in 'replace()' -- instead of a regular expression -- will only replace the first instance of the matching substring. It has the syntax: 'replace(substr, newSubstr)'

// console.log(sentence.replace(' ', ''));

// NOTE - GLOBAL replace can only be done with a regular expression. In the following example, the regular expression, 're', includes the global and ignore case flags which permits 'replace()' to replace ach occurence of a space (' ') in the string with no-space (''):

let re = / /gi;

// console.log(sentence.replace(re, ""));

// NOTE - Rough Draft:
// const updatedPalindrome = (stringInput) => {
//   let squishedInput = stringInput.replace(re, '').toLowerCase('');
//   let reverseSquished = squishedInput.split('').reverse().join('');
//   if (squishedInput !== reverseSquished)
//     return false;
//   else return true;
// }

// NOTE - Revised, v1.2:
const updatedPalindrome = (stringInput) => {
  if (stringInput.replace(re, '').toLowerCase('') !== stringInput.replace(re, '').toLowerCase('').split('').reverse().join(''))
    return false;
  else return true;
}


// SECTION 5. Punctuation-Blind Palindrome

// 1. Make your palindrome function work even if the string contains punctuation. So: "Sit on a potato pan, Otis!!!" or "A man, a plan, a canal: Panama." or "Cigar? Toss it in a can! It is so tragic." would pass the test.

const punctuationPlusSpace = /[" "!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

const punctuationIsPalindrome = (stringInput) => {
  let stripped = stringInput.replace(punctuationPlusSpace, '').toLowerCase();
  if (stripped !== stripped.split('').reverse().join('')) {
    return false;
  } else return true;
};


// SECTION 6. Word Palindrome

// 1. Make a "word palindrome" function that returns true if the words in a phrase are the same backwards and forwards. It should not care about spacing, capitalization, or punctuation.

const regexRemove = /[" "!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

const wordPalindrome = (stringInput) => {
  const stripped = stringInput.replace(regexRemove, '').toLowerCase();
  if (
    stripped !==
     stripped.split('').reverse().join('')
  ) { return false }
  else return true;
}