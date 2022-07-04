/*
 * Create the function factorial here
 */
function factorial(n) {
  if (n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
}
