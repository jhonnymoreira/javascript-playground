var playground = { version: 1.0 };

playground.fibonacci = function () {
  var begin = 1
    , middle = 0
    , end = 0
    , fibonacci = []
    , sequence = prompt('How many numbers in the sequence?');

  for ( i = 0; i < sequence; i++ ) {
    end = begin + middle;
    fibonacci[i] = end;

    console.log( fibonacci[i] );

    begin = middle;
    middle = end;
  }
};

playground.hexToRGB = function (hex) {
  var base = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c',
              'd', 'e', 'f']
    , hex  = hex.toLowerCase().split('')
    , rgb  = [];

  if ( hex.length <= 3 ) {
    for ( i = 0; i <= 2; i++ ) {
      rgb[i] = base.indexOf( hex[i] )*16 + base.indexOf( hex[i] );
    }
  } else {
    for ( i = 0; i <= hex.length / 3; i++ ) {
      rgb[i] = base.indexOf( hex[i*2] )*16 + base.indexOf( hex[i*2 + 1] );
    }
  }

  return rgb;
};

playground.evenFibonnaci = function () {
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
};
