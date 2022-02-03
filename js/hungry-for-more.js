
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
