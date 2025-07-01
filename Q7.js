const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function reverseString(str) {
  return str.split('').reverse().join('');
}

readline.question("Enter a string to reverse: ", (input) => {
  console.log("Reversed string:", reverseString(input));
  readline.close();
});