function fibonacci () {
	var begin = 1;
	var middle = 0;
	var end = 0;
	var fibonacci = [];
	var sequence = prompt('Quantos números você irá querer?');

	for ( i = 0; i < sequence; i++ ) {
		end = begin + middle;

		fibonacci[i] = end;
		console.log(fibonacci[i]);

		begin = middle;
		middle = end;
	}
}
