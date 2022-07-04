/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  try {
    let splitString = s.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    console.log(joinArray);
  } catch (error) {
    // Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
    console.log(error.message);
    console.log(s);
  }
}
