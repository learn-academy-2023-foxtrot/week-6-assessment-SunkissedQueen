// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
// FSWD Louis
// a) Create a test with an expect statement using the variable provided.
describe("hitchHickersGuide", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    
    const hitchhikersCharacters = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy"},
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    expect(hitchHikersGuide(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// b) Create the function that makes the test pass.

// Pseudo code:
// name : hitchHikerGuide
// input : array
// output : array
// process : iterate through each value and split the full name into first and last, capitalize the full name by changing the char stored in index 0 to uppercase then using slice to rejoin the rest of the string, then use string interpulation to tie it all together 

// const hitchHikersGuide = (array) => { // will take an array as a parameter
//     const sentences = array.map(value => { // have sentence hold the new array, use map to iterate through each value 
//       const [firstName, lastName] = value.name.split(' ') // split the full name into first and last names
//       const capFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1) // will hold the first name capitalized, by capitalizing the char in index 0 then slicing it with the rest of the name 
//       const capLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1) // will hold the last name capitalized, by capitalizing the char in index 0 then slicing it with the rest of the name 
//       return `${capFirstName} ${capLastName} is ${value.occupation}.` // return the sentence using string interpulation 
//     })
//     return sentences // return the new senctence
//   }

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
// FSWD Tori
// a) Create a test with an expect statement using the variables provided.
describe("remainArray", () => {
  it("returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(remainArray(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainArray(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// //Good Failure: ReferenceError: RemainArray is not defined

// // b) Create the function that makes the test pass.

// Pseudo code:
// function name: remainArray
// Input: an array of mixed data
// Output: an array of numbers, only the remainders of the numbers inside the mixed array when divided by 3
// Process: create a function, declare variables for the numbers only and remainders, use the medulo operator to divide by three and get the remainder, use the .filter method and the .map method to do the iterating of the arrays.

// const remainArray = (array) => { // created a function called RemainArray that passes array as its parameter
//   const onlyNums = array.filter((value) => typeof value === 'number') // created a variable for the numbers only by using the filter method to create an array of only the values that are the datatype of 'number' 
//   const remainders = onlyNums.map((value) => value % 3) // take in the array of only the datatypes of 'number's and use the medulo operator to divide and get the remainders of the numbers inside the array
//     return remainders // returns the array only the remainders of the numbers
// }

// console.log(remainArray(hodgepodge1))
// console.log(remainArray(hodgepodge2))

// output:  PASS  ./code-challenges.test.js
// [ 2, 0, -1, 0 ]
// [ 2, 1, -1 ]

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
// FSWD Shaun
// a) Create a test with an expect statement using the variables provided.

describe("cubeAndSum", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(cubeAndSum(cubeAndSum1)).toEqual(99)
    expect(cubeAndSum(cubeAndSum2)).toEqual(1125)
  })
})  
const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

// Pseudo code:
//name: cubeAndSum
//tools: .map, .reduce, Math.pow or **
//goal: to return the sum of all the numbers cubed
//input: an array of numbers
//output: a number
//process:
//use .map to go through the array and cube each number
//use .reduce to add all the cubed numbers together
//return the sum of all the cubed numbers

// const cubeAndSum = (array) => 
//   array.map(val => val ** 3).reduce((acc, val) => acc + val, 0)


/*
Pseudocode (updated):
Function Name: cubeAndSum
Input: array of numbers called 'array'
Output: single number representing the sum of all the numbers in array cubed
Start with an array of numbers called array.
Apply the map function to array
For each element val in the array Calculate val raised to the power of 3.
The map function returns a new array where each element is cubed.
Apply the reduce function to the new array created from step 2
Initialize an accumulator acc with the value 0.
For each element val in the new array
Add val to the accumulator acc.
The reduce function returns the final value of acc, which is the sum of all the cubed numbers.
Return the sum (final value of acc).
*/
