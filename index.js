// Problem 1
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function calculateDifference(a, b) {
  return a - b
}

rl.question('Enter the first number: ', firstInput => {
  rl.question('Enter the second number: ', secondInput => {
    const num1 = parseFloat(firstInput)
    const num2 = parseFloat(secondInput)

    const result = calculateDifference(num1, num2)
    console.log(`The difference is: ${result}`)

    rl.close()
  })
})

// Problem 2
const readline = require('readline')

const rl2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function isOdd(number) {
  return number % 2 !== 0
}

rl2.question('Enter a number: ', input => {
  const num = parseInt(input, 10)

  if (isOdd(num)) {
    console.log(`${num} is odd.`)
  } else {
    console.log(`${num} is not odd.`)
  }

  rl2.close()
})

// Problem 3
function findMin(numbers) {
  if (numbers.length === 0) {
    throw new Error('Array is empty')
  }

  return Math.min(...numbers)
}

const nums = [34, 15, 88, 2, -6, 9]
const minNumber = findMin(nums)
console.log(`The smallest number is: ${minNumber}`)

// Problem 4
function filterEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0)
}

const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = filterEvenNumbers(nums2)
console.log(`Even numbers: ${evenNumbers}`)

// Problem 5
function sortArrayDescending(numbers) {
  return numbers.slice().sort((a, b) => b - a)
}

const nums3 = [5, 2, 8, 1, 4, 7]
const sortedArray = sortArrayDescending(nums3)
console.log(`Sorted array in descending order: ${sortedArray}`)

// Problem 6
function lowercaseFirstLetter(str) {
  if (str.length === 0) {
    return str
  }

  return str.charAt(0).toLowerCase() + str.slice(1)
}

const exampleString = 'Azizur Rahman'
const result = lowercaseFirstLetter(exampleString)
console.log(result)

// Problem 7
function countVowels(str) {
  const vowelRegex = /[aeiouAEIOU]/g

  const matches = str.match(vowelRegex)

  return matches ? matches.length : 0
}

const string = 'Azizur Rahman'
const vowelCount = countVowels(string)
console.log(`Number of vowels: ${vowelCount}`)

// Problem 8
function findAverage(numbers) {
  if (numbers.length === 0) {
    throw new Error('Array is empty')
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0)

  return sum / numbers.length
}

const nums4 = [10, 20, 30, 40, 50]
const average = findAverage(nums4)
console.log(`The average is: ${average}`)
