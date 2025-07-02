// var obj = {};
// obj["abc"] = ["abc", "bca", "cab"];
// //   key-->[]            value
// console.log(obj);

function same(arr1, arr2) {
  // =============================
  // Step 1: Handle the edge case
  // If the two arrays are not the same length, they cannot match.
  if (arr1.length !== arr2.length) {
    return false; // Directly return false if sizes are different
  }

  // =============================
  // Step 2: Create a frequency counter for arr1
  // This will count how many times each number appears in arr1
  let freq1 = {}; // Empty object to store counts

  for (let i = 0; i < arr1.length; i++) {
    // Go through each element
    let number = arr1[i]; // Get the number at the current position

    if (freq1[number] === undefined) {
      // If this number is not in freq1 yet
      freq1[number] = 1; // Start the count at 1
    } else {
      freq1[number] = freq1[number] + 1; // If already exists, increase the count
    }
  }

  // =============================
  // Step 3: Create a frequency counter for arr2
  // This will count how many times each number appears in arr2
  let freq2 = {}; // Empty object to store counts

  for (let i = 0; i < arr2.length; i++) {
    // Go through each element
    let number = arr2[i]; // Get the number at the current position

    if (freq2[number] === undefined) {
      // If this number is not in freq2 yet
      freq2[number] = 1; // Start the count at 1
    } else {
      freq2[number] = freq2[number] + 1; // If already exists, increase the count
    }
  }

  // =============================
  // Step 4: Compare frequencies
  // For each key (number) in freq1, check if its square exists in freq2

  // Loop through freq1 using manual loop since we are not using "for...in"
  let keys1 = []; // Create an array of keys manually

  // Collect all keys from freq1
  for (let i = 0; i < arr1.length; i++) {
    let key = arr1[i];
    let found = false;

    // Check if key is already stored
    for (let j = 0; j < keys1.length; j++) {
      if (keys1[j] === key) {
        found = true;
        break;
      }
    }

    // If the key is not stored yet, push it
    if (found === false) {
      keys1.push(key);
    }
  }

  // Now compare each key's square
  for (let i = 0; i < keys1.length; i++) {
    let key = keys1[i];
    let squared = key * key;

    // Check if the square exists in freq2
    if (freq2[squared] === undefined) {
      return false; // If square is not found, return false
    }

    // Check if their counts are the same
    if (freq2[squared] !== freq1[key]) {
      return false; // Frequency doesn't match, so return false
    }
  }

  // =============================
  // Step 5: All checks passed
  // If the function didn't return false, the arrays match correctly
  return true;
}
