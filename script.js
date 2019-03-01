function encode()
{
	var user_input = document.getElementById("message").value; /*storing user input*/
	var cypher_text = [];
	var alphabet=['a','b','c','d','e','f','g','h','i','j','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
	
	for (var idx=0; idx<user_input.length; idx++) /*Iterate through length of string*/
	{
		var input = alphabet.indexOf(user_input[idx]); /*finds the letter in the string and matches to alphabet*/
		if(input == -1) //If nothing is in input (no user input)*/
		{
			cypher_text.push(user_input[idx]); /*Push adds new items to the end of array*/
		}
		else
		{
			var temp = (input+13) %26; /* finds remainder after division of all alphabet letters (26) */
			var letter = alphabet[temp]; /*find desired index of alphabet to print, desired character of alphabet*/
			cypher_text.push(letter); /*add desired character to cypher array*/
		}
	}
	document.getElementById("output").innerHTML = cypher_text.join(""); /*change content of "output" area with .innerHTML to cyphered array joined into one string*/
}

function decode()
{
	var decode_this = document.getElementById("message").value; /*storing text to  be decoded*/
	var decoded_text = [];
	var alphabet=['a','b','c','d','e','f','g','h','i','j','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
	
	for (var idx=0; idx<decode_this.length; idx++) /*Iterate through length of string*/
	{
		var input = alphabet.indexOf(decode_this[idx]);
		if (input == -1)
		{
			decoded_text.push(decode_this[idx]);
		}
		else
		{
			var temp = (input+13) %26;
			var letter = alphabet[temp];
			decoded_text.push(letter);
		}
	}
	document.getElementById("output").innerHTML = decoded_text.join("");
}