// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

/**
 * Question:
 * Given a positive sorted array a = [3,4,6,9,10,12,14,15,17,19,21]
 * Define a function f(a,x) that returns x, then next smallest number, or -1 for Errors.
 *
 * i.e.
 * f(a, 12) = 12
 * f(a, 13) = 12;
 *
 * so some test cases
 *
 * 1. f(a, 12) = 12 //number found
 * 2. f(a, 13) = 13 //smaller number found
 * 3. f(a, 2) = -1 //left out of bounds too smaller
 * 4. f(a, 3) = 3 // exact left boundry
 * 5. f(a, 21) = 21 // exact right boundary
 * 6. f([], x) = -1 //empty array
 * 7. f(null, x) = -1 //invalid input
 * */

function getNextSmallest(a: number[], x: number): number {
  //for test case 6 & 7
  if (!a?.length) return -1;

  let answer: number = -1;
  let low = 0;
  let high = a.length - 1;

  // binary search
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    // for 1 number found
    if (x === a[mid]) {
      return x;
    } else if (x > a[mid]) {
      answer = a[mid];
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return answer;
}

const a = [3, 4, 6, 9, 10, 12, 14, 15, 17, 19, 21];
console.log(getNextSmallest(a, 12)); //pass
console.log(getNextSmallest(a, 13)); //pass
console.log(getNextSmallest(a, 2)); //pass
console.log(getNextSmallest(a, 3)); //pass
console.log(getNextSmallest(a, 21)); //pass
console.log(getNextSmallest([], 2)); //pass
console.log(getNextSmallest(null, 2)); //pass
console.log(getNextSmallest(a, 10)); //pass

/**
 * 
 * A binary search is basically while(low <= high), bisect until the item is found. The equals is actually important because the number array eventually degenerates into size of 1, and the contents of the while loop needs to execute. Incrementing and decrementing mid by 1 is also important to avoid infinite loops.

Finding the next smallest number makes this question a little harder. A clever solution is merging a linear search approach with a binary search, where you initialize answer with -1, then update answer every time the a[mid] value is less than x. If x isn’t found, answer will naturally be the next smallest value when you exit the loop.

For those with more experience, they might add precondition checks to clearly short circuit the edge cases.

// Precondition checks
// f(null, x), f([], x)
if (a == null || a.length == 0) return -1; 
// f(a, 2)
if (x < a[0]) return -1;
// f(a, 3)
if (x == a[0]) return a[0];
// f(a, 21), f(a, 22)
if (x >= a[a.length - 1]) return a[a.length - 1];

The mid point calculation caused integer out of range errors for modern large sized datasets.

var mid = Math.floor(low + high) / 2); // bad
var mid = low + Math.floor((high - low) / 2); // good

 */

// #
/**
 * An algorithm to identify if a word is a palindrome or not could be:
 * test:
 * isPalindrome("neuquen") // true
 * isPalindrome("Buenos Aires") // false
 */

function isPalindrome(word: string): boolean {
  // Step 1- Put a pointer at each extreme of the word
  // Step 2 - Iterate the string "inwards"
  // Step 3 - At each iteration, check if the pointers represent equal values
  // If this condition isn't accomplished, the word isn't a palindrome

  if (!word) return false;
  let ans = true;
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] !== word[right]) return false;
    left++;
    right--;
  }

  return ans;
}

isPalindrome('neuquen'); // true
isPalindrome('Buenos Aires'); // false
