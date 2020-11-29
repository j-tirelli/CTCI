// Implement an algorithm to convert a string with spaces between words into a URI with %20 in place of spaces.

const URLify = (string1) => {
  let trimmedString = string1.trim();
  let splitString = trimmedString.split(' ');
  return splitString.join('%20')
};

module.exports = URLify;