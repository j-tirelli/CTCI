// implement an algorithm to determine if one string is a permutation of another.

const isPermutation = (string1, string2) => {
  // iterate over string1
    // save each character as the key of an object with a value of 1 (occurences).
    // repeated characters increment the keys value
  // iterate over string2
    // lookup the current character in the previously created object
      // if exists, decrement by one.
        // if value goes down to 0, delete key from object.
      // else return false
  // return true

  let seenChars = {};
  for (let char of string1) {
    if (!seenChars[char]) {
      seenChars[char] = 1;
    } else {
      seenChars[char]++;
    }
  }

  for (let char of string2) {
    if (seenChars[char]) {
      (seenChars[char] <= 1) ? delete seenChars[char] : seenChars[char]--;
    } else return false
  }
  return (JSON.stringify(seenChars) === '{}') ? true : false;

};

module.exports = isPermutation;