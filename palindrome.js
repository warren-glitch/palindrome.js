// Declare variables with the strings
let word1 = "RACECAR";
let word2 = "RECORDER";

// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Reverse the strings
let reversedWord1 = reverseString(word1);
let reversedWord2 = reverseString(word2);

// Log the original and reversed strings
console.log("Original word 1:", word1);
console.log("Reversed word 1:", reversedWord1);
console.log("Original word 2:", word2);
console.log("Reversed word 2:", reversedWord2);

// Log whether the original strings are palindromes
console.log("Is word 1 a palindrome?", word1 === reversedWord1);
console.log("Is word 2 a palindrome?", word2 === reversedWord2);
