function rgbColor(hex) {
  var base = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c',
              'd', 'e', 'f']
    , hex  = hex.toLowerCase().split('')
    , rgb  = [];

  if ( hex.length === 3 ) {
    for ( i = 0; i <= 2; i++ ) {
      rgb[i] = base.indexOf( hex[i] )*16 + base.indexOf( hex[i] );
    }
  } else if ( hex.length === 6 ) {
    for ( i = 0; i <= hex.length / 3; i++ ) {
      rgb[i] = base.indexOf( hex[i*2] )*16 + base.indexOf( hex[i*2 + 1] );
    }
  }

  return rgb;
}
