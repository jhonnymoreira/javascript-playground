function rockPaperScissors() {
  /* The basic elements to a rock-paper-scissors match */
  var elements = ['rock', 'paper', 'scissors'];

  /* The input element chosen by the player */
  var player = prompt('Rock, paper os scissors?').toLowerCase();

  /**
   * Makes the choice of the computer.
   *
   * The "Math.random()" always return a float number between 0 and 1, using the
   * function "Math.floor()" and multiplying "Math.random()" by an array length
   * garantees a random number that will always be less than the array length.
   *
   */
  var computer = elements[Math.floor( Math.random() * elements.length )];

  /**
   * Filtering player input
   *
   * By default the number "-1" means that a term doesn't exist in an Array.
   * The winner formula always generates numbers betweens 0 and 2, thanks to the
   * module operator. Every values has a meaning:
   *
   * 0 => Draw
   * 1 => Win
   * 2 => Loss
   *
   */
  if ( elements.indexOf( player ) === -1 ) {
    alert('You typed "' + player + '". Try again!');
    rockPaperScissors();
  } else {
    var winner = ( (elements.indexOf( player ) + elements.length) - elements.indexOf( computer ) ) % 3;

    switch ( winner ) {
      case 1:
        alert('You win!');
        break;
      case 2:
        alert('You lose!');
        break;
      default:
        alert('Draw!');
    }
  }
}
