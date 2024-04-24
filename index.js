function checkPalindrome() {
    const input = document.getElementById("input").value;
    const result = document.getElementById("result");
    if (isPalindrome(input)) {
      result.textContent = `${input} is a palindrome`;
    } else {
      result.textContent = `${input} is not a palindrome`;
    }
  }
  
  function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
//   Test Cases:

// 1. Enter "radar" and click "Check" - Output: "radar is a palindrome"
// 2. Enter "hello" and click "Check" - Output: "hello is not a palindrome"
// 3. Enter "level" and click "Check" - Output: "level is a palindrome"
// 4. Enter "abcba" and click "Check" - Output: "abcba is a palindrome"
//  Enter "abcd" and click "Check" - Output: "abcd is not a palindrome"

  


function findMinMax() {
    const numbers = document.getElementById("numbers").value.split(",");
    const minMax = findMinAndMax(numbers);
    document.getElementById("min-max-result").textContent = `Minimum: ${minMax.min} and Maximum: ${minMax.max}`;
  }
  
  function findMinAndMax(numbers) {
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    numbers.forEach((number) => {
      if (number < min) {
        min = number;
      }
      if (number > max) {
        max = number;
      }
    });
    return { min, max };
  }
  
  function findMissingNumber() {
    const numbers = [11, 12, 14, 15, 16, 18, 19, 20];
    const missingNumber = findMissing(numbers);
    document.getElementById("missing-result").textContent = `Missing Number: ${missingNumber}`;
  }
  
  function findMissing(numbers) {
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
      if (!numbers.includes(i)) {
        return i;
      }
    }
  }
  
//   Test Cases:
  
//   Minimum and Maximum Numbers:
  
//   - Enter "10,20,30,40,50" and click "Find Min and Max" - Output: "Minimum: 10 and Maximum: 50"
//   - Enter "100,50,20,30,40" and click "Find Min and Max" - Output: "Minimum: 20 and Maximum: 100"
  
//   Missing Number Identification:
  
//   - Click "Find Missing Number" - Output: "Missing Number: 13"
//   - Click "Find Missing Number" - Output: "Missing Number: 17"