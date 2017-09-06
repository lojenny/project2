// Function signature
// The arguments that a function takes and gives the character position.

// Function contract
// Takes a string and record the character position then return in object.

// Side-effects:
// no side effect

// Function signature
// name: returnDices
// arguments: a string
// return: object


function countCharactersTypes(str) {
  var output = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    var position = i
    if (output[char]) {
      output[char].push(position);
      debugger
    } else {
      output[char] = [position];
    }
  }
  return output;
}

// console.log(countCharactersTypes(''));
console.log(countCharactersTypes('apple'));