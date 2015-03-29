function evenFibonacci() {
  // Term n1
  var a = 1;
  // Term n2
  var b = 0;
  // Term n1 + n2
  var c = 0;
  // Sum of all even numbers in Fibonnaci sequence between 0 and 4.000.000
  var s = 0;
  // Loop usage
  var i = 0;

  // Create an infinite loop until you get an number closer to 4.000.000
  // Bigger than 4.000.000, loop stops.
  while (i < i + 1) {
    c = a + b;

    // If even, add the value to sum variable
    if (c % 2 == 0) { s += c }
    // If bigger than 4.000.000, loop stops.
    if (c >= 4000000) { break }

    // Fibonacci pattern
    a = b;
    b = c;

    // Loop continues until the second condition (c >= 4x10^6) be true.
    i++;
  }

  // The answer
  return s;
}
