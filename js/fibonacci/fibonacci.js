function fibonacci () {
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
}