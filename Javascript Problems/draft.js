// Function to calculate the sum of an array
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }
  
  // Function to find the maximum number in an array
  function findMaxNumber(arr) {
    maxValue = -Infinity;
    for (item of arr) {
        // Find maximum value
        if (item > maxValue)
          maxValue = item;
    }
    return maxValue;
  }
  
  // Function to filter odd numbers from an array
  function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
  }
  
  // Function to check if a string is a palindrome
  function isPalindrome(str) {
    const reversedStr = [...str].reverse().join('');
    return str === reversedStr;
  }
  
  // Function to find the missing number in an array
function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  
  let actualSum = 0;
  for (const num of arr) 
    actualSum += num;
  

  return expectedSum - actualSum;
}
  // Function to find duplicate elements in an array
  function findDuplicates(arr) {
    let new_arr =[]
    let dup =[]
    for (let i=0; i< arr.length ; i++){
        if(!new_arr.includes(arr[i]) == true){
            new_arr.push(arr[i]);
        }
        else{
            dup.push(arr[i]);
        }
    }
    return dup;
}

//? Problem 1

const sum = sumArray([1, 2, 3, 4, 5]);

console.log('Sum of array:',sum); //* Output: 15

//? Problem 2

const maxNumber = findMaxNumber([10, 5, 8, 20, 3]);

console.log('Maximum number:', maxNumber); //* Output: 20

//? Problem 3

const oddNumbers = filterOddNumbers([1, 2, 3, 4, 5]);

console.log('Odd numbers:', oddNumbers); //* Output: [1, 3, 5]

//? Problem 4

const isPalindromeResult = isPalindrome('radar');
const isNonPalindromeResult = isPalindrome('hello');

console.log('Palindrome Result for "radar":', isPalindromeResult); //* Output: true
console.log('Palindrome Result for "hello":', isNonPalindromeResult); //* Output: false

//? Problem 5

const missingNumber = findMissingNumber([1, 2, 3, 5, 6]);

console.log('Missing number in array:', missingNumber); //* Output: 4

//? Problem 6

const duplicateNumbers = findDuplicates([1, 2, 3, 2, 4, 5, 4, 6]);

console.log('Duplicate numbers:', duplicateNumbers); //* Output: [2, 4]
