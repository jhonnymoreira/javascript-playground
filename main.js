var playground = { version: 1.0 };

playground.fibonacci = function () {
  var begin = 1;
  var middle = 0;
  var end = 0;
  var fibonacci = [];
  var sequence = prompt('How many numbers in the sequence?');

  for ( i = 0; i < sequence; i++ ) {
    end = begin + middle;
    fibonacci[i] = end;

    console.log( fibonacci[i] );

    begin = middle;
    middle = end;
  }
};

playground.hexToRGB = function (hex) {
  var base = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  var hex  = hex.toLowerCase().split('');
  var rgb  = [];

  if ( hex.length <= 3 ) {
    for ( i = 0; i <= 2; i++ ) {
      rgb[i] = base.indexOf(hex[i]) * 16 + base.indexOf(hex[i]);
    }
  } else {
    for ( i = 0; i <= hex.length / 3; i++ ) {
      rgb[i] = base.indexOf(hex[i * 2]) * 16 + base.indexOf(hex[i * 2 + 1]);
    }
  }

  return rgb;
};

playground.evenFibonnaci = function () {
  var a = 1;
  var b = 0;
  var c = 0;
  var s = 0;
  var i = 0;

  while ( i < i + 1 ) {
    c = a + b;

    if ( c % 2 == 0 ) { s += c }
    if ( c >= 4000000 ) { break }

    a = b;
    b = c;

    i++;
  }

  return s;
};
