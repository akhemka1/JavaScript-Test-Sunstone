const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPalindrome(str) {
  const cleaned = str.replace(/\s+/g, '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

readline.question("Enter a string to check for palindrome: ", (input) => {
  console.log("Is palindrome?", isPalindrome(input));
  readline.close();
});