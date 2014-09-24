# Fibonacci Sequence

## What's Fibonacci Sequence?
Sorry, but [let me google it for you](http://lmgtfy.com/?q=Fibonacci+Sequence).
***
## How does it works?
*It's simple.*
**Fibonacci Sequence** *gets* the *first two numbers* to **generate** the *next one* in the row.
***
## How can I do it, then?
*It's simple too, but you have to think.*
You have to understand the sequence as *variables first*, then you can attribute numbers on it.

The sequence is based in a logical way that you just need **three variables** so you can generate it. But first ~~Let me take a Selfie~~, we need examples. *Right?* **Right!**

> **Fibonacci Sequence [Real Example]**

> 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ...

If we use only the first three elements, we get something like this:
> 1, 1, 2

Converting it to variables, we have:
> a, b, c

What did I said earlier?
> Fibonacci Sequence **gets the first two numbers** to generate the **next one** in the row.

Understading it we conclude that the **c** is just **c** *= a + b*. Now we have:
> a, b, (a + b)

After all the explanation, the code begins!

## The Code
The code begins with a *function*, so I can simply call it on the console. The name of the function is gonna be **_fibonacci_**, and this is our headstart.

```javascript
function fibonacci () {
	// code goes here
}
```

Now we need to setup the variables, but we are gonna need **two extra variables**. Why? Because we want to setup a limit number of the sequence length and also display the sequence, so we are gonna use the *prompt* command and setup on the variable to be an *array*.

```javascript
function fibonacci () {
	var begin = 1; // This is our "a"
	var middle = 0; // This is our "b"

	// Just create it
	var end = 0; // This is our "c"

	var fibonacci = []; // The sequence will be stored in here
	var sequence = prompt('How many numbers do you want to see, sir?'); // And now we have our limit
}
```

If our sequence is based on a pattern *[a, b, (a + b)]*, we can create a loop, so the code is gonna be something like this:

```javascript
function fibonacci () {
	var begin = 1; // This is our "a"
	var middle = 0; // This is our "b"

	// Just create it
	var end = 0; // This is our "c"

	var fibonacci = []; // The sequence will be stored in here
	var sequence = prompt('How many numbers do you want to see, sir?'); // And now we have our limit
	
	// Setup the base
	// Limit is less than the sequence length
	// Add +1 to the counting
	for ( i = 0; i < sequence; i++ ) {
		...
	}
}
```
