function encodeRot13()
{
	var user_input = document.getElementById("message").value; /*storing user input*/
	var cypherText = [];
	var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
	
	user_input = user_input.toLowerCase(); /*Make everyhing lower case*/
	for (var i=0; i<user_input.length; i++) /*Iterate through length of string*/
	{
		var input = alphabet.indexOf(user_input[i]); /*returns -1 if not found in alphabet*/
		if(input == -1) /*If not alphabetical, push without performing changes to the text*/
		{
			cypherText.push(user_input[i]); 
		}
		else /*If alphabetical, needs rotated by 13 places*/
		{
			var temp = (input+13)%26; /*finds remainder after division of all alphabet letters (26)*/
			var letter = alphabet[temp]; /*find desired index of alphabet to print, desired character of alphabet*/
			cypherText.push(letter); /*add desired character to cypher array*/
		}
	}
	document.getElementById("output").innerHTML = cypherText.join(""); /*change content of output area to cypherText string*/
}

function decodeRot13()
{
	var user_input = document.getElementById("message").value; /*storing user input*/
	var cypherText = [];
	var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
	
	user_input = user_input.toLowerCase(); /*Make everyhing lower case*/
	for (var i=0; i<user_input.length; i++) /*Iterate through length of string*/
	{
		var input = alphabet.indexOf(user_input[i]); /*returns -1 if not found in alphabet*/
		if(input == -1) /*If not alphabetical, push without performing changes to the text*/
		{
			cypherText.push(user_input[i]); 
		}
		else /*If alphabetical, needs rotated by 13 places*/
		{
			var temp = (input+13)%26; /*finds remainder after division of all alphabet letters (26)*/
			var letter = alphabet[temp]; /*find desired index of alphabet to print, desired character of alphabet*/
			cypherText.push(letter); /*add desired character to cypher array*/
		}
	}
	document.getElementById("output").innerHTML = cypherText.join(""); /*change content of output area to cypherText string*/
}

function encodeBase64()
{
	var user_input = document.getElementById("message").value;
	var b64 = btoa(user_input); /*find the base64 of user input*/

	document.getElementById("output").innerHTML = b64; 
}

function decodeBase64()
{
	var user_input = document.getElementById("message").value; 
	var b64 = atob(user_input);/*reverse b64 on user input*/

	document.getElementById("output").innerHTML = b64; 
}

function encodeMorse()
{
	var morseCode={ /*letters, numbers and then some symbols, working as a dictionary*/
    'a': '.-',    'b': '-...',  'c': '-.-.', 'd': '-..',
    'e': '.',     'f': '..-.',  'g': '--.',  'h': '....',
    'i': '..',    'j': '.---',  'k': '-.-',  'l': '.-..',
    'm': '--',    'n': '-.',    'o': '---',  'p': '.--.',
    'q': '--.-',  'r': '.-.',   's': '...',  't': '-',
    'u': '..-',   'v': '...-',  'w': '.--',  'x': '-..-', 
    'y': '-.--',  'z': '--..',  
	
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', 
    '9': '----.', '0': '-----', 
	
	' ': '/', 	  '.': '·-·-·-', ',':'--··--'
	};

	var user_input = document.getElementById("message").value; 
	user_input = user_input.toLowerCase();
	user_input = user_input.split(""); /*using split to store each character in an element of the array*/
	
	for (var i = 0; i <user_input.length; i++)  
	{
		user_input[i] = morseCode[user_input[i]]; /*Substitute correct item from dictionary until end of array*/
	}
	
	document.getElementById("output").innerHTML = user_input.join(" "); /*Change output area to the string user input*/
}

function decodeMorse()
{
	var reversedMorse={  
	'.-'  : 'a',  '-...': 'b',  '-.-.': 'c',  '-..' : 'd',
    '.'   : 'e',  '..-.': 'f',  '--.' : 'g',  '....': 'h',
    '..'  : 'i',  '.---': 'j',  '-.-' : 'k',  '.-..': 'l',
    '--'  : 'm',  '-.'  : 'n',  '---' : 'o',  '.--.': 'p',
    '--.-': 'q',  '.-.' : 'r',  '...' : 's',  '-'   : 't',
    '..-' : 'u',  '...-': 'v',  '.--' : 'w',  '-..-': 'x', 
    '-.--': 'y',  '--..': 'z',  
	
    '.----': '1', '..---': '2', '...--': '3', '....-': '4', 
    '.....': '5', '-....': '6', '--...': '7', '---..': '---..', 
    '----.': '9', '-----': '0', 
	
	'/': ' ', '·-·-·-': '.', '--··--': ','
	};
	
	var user_input = document.getElementById("message").value; 
	user_input = user_input.toLowerCase();
	user_input = user_input.split(" "); /*using split to store each character in an element of the array*/
	
	for (var i = 0; i <user_input.length; i++)  
	{
		user_input[i] = reversedMorse[user_input[i]];
	}
	
	document.getElementById("output").innerHTML = user_input.join(""); /*change content of "output" area with .innerHTML to cyphered array joined into one string*/
}

function encodeAtbash()
{
	var reverseAlphabet={
	'a': 'z',   'b': 'y',   'c': 'x',   'd': 'w',
    'e': 'v',   'f': 'u',   'g': 't',   'h': 's',
    'i': 'r',   'j': 'q',   'k': 'p',   'l': 'o',
    'm': 'n',   'n': 'm',   'o': 'l',   'p': 'k',
    'q': 'j',   'r': 'i',   's': 'h',   't': 'g',
    'u': 'f',   'v': 'e',   'w': 'd',   'x': 'c', 
    'y': 'b',   'z': 'a'
	};
	
	var user_input = document.getElementById("message").value; 
	user_input = user_input.toLowerCase();
	var cypherText = [];
	
	for (var i = 0; i <user_input.length; i++)  
	{
		if (!user_input[i].match(/^[a-z0-9]+$/i)) /*using regex to find non alphabetic characters and adding them to cyphertext to retain punctuation and spacing*/
		{
			cypherText.push(user_input[i]);
		}
		else
		{
			cypherText.push(reverseAlphabet[user_input[i]]); /*if alphabetic find use as key to find coded item*/
		}
	}
	
	document.getElementById("output").innerHTML = cypherText.join(""); /*change content of "output" area with .innerHTML to cyphered array joined into one string*/
}

function decodeAtbash()
{
	var alphabet={
	'z': 'a',   'y': 'b',   'x': 'c',   'w': 'd',
    'v': 'e',   'u': 'f',   't': 'g',   's': 'h',
    'r': 'i',   'q': 'j',   'p': 'k',   'o': 'l',
    'n': 'm',   'm': 'n',   'l': 'o',   'k': 'p',
    'j': 'q',   'i': 'r',   'h': 's',   'g': 't',
    'f': 'u',   'e': 'v',   'd': 'w',   'c': 'x', 
    'b': 'y',   'a': 'z'
	};
	
	var user_input = document.getElementById("message").value; 
	user_input = user_input.toLowerCase();
	var cypherText = [];
	
	for (var i = 0; i <user_input.length; i++)  
	{
		if (!user_input[i].match(/^[a-z0-9]+$/i)) /*using regex to find non alphabetic characters and adding them to cyphertext to retain punctuation and spacing*/
		{
			cypherText.push(user_input[i]);
		}
		else
		{
			cypherText.push(alphabet[user_input[i]]);  /*if alphabetic find use as key to find coded item*/
		}
	}
	
	document.getElementById("output").innerHTML = cypherText.join(""); /*change content of "output" area with .innerHTML to cyphered array joined into one string*/
}