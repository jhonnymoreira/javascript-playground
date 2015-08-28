function evenFibonacci() {
  var a = 1
    , b = 0
    , c = 0
    , l = 4000000
    , s = 0
    , i = 0;

  while (i < i + 1) {
    c = a + b;

    if ( c%2 == 0 ) { s += c; }
    if ( c >= l ) { break; }

    a = b;
    b = c;

    i++;
  }

  return s;
}
