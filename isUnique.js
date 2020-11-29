// implement an algorithm to determine if a string has all unique characters.

// Extra Credit: What if you cannot use additional data structures?

const allUniqueChars = (string, ADS) => {
  if (ADS) {
    for (let i = 0; i < string.length - 1; i++) {
      for (let j = i + 1; j < string.length; j++) {
        if (string[i] === string[j]) {
          return false
        }
      }
    }
    return true
  } else {
    const seenChars = {};
    for (let char of string) {
      if (seenChars[char]) {
        return false;
      } else {
        seenChars[char] = true;
      }
    }
    return true;
  }
};

module.exports = allUniqueChars;