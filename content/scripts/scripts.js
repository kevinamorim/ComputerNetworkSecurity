function cipher_caesar() {
	
	var e = document.getElementById("shift");
	var shiftNumber = parseInt(e.options[e.selectedIndex].value);
	
	var strToCipher = document.getElementById("textToCipher").value;
	var cipher = "";
	
	for(var i = 0; i < strToCipher.length; i++) {
		var charCodeOriginal = strToCipher.charCodeAt(i);
		charCodeOriginal = charCodeOriginal - 65;
		var newCode = ((charCodeOriginal + shiftNumber) % 26) + 65;
		cipher += String.fromCharCode(newCode);
	}
	
	var box = document.getElementById('cipher');
	box.value = cipher;
	
}

function decipher_caesar() {
	
	var e = document.getElementById("shift");
	var shiftNumber = parseInt(e.options[e.selectedIndex].value);
	
	var strToCipher = document.getElementById("textToCipher").value;
	var cipher = "";
	
	for(var i = 0; i < strToCipher.length; i++) {
		var charCodeOriginal = strToCipher.charCodeAt(i);
		charCodeOriginal = charCodeOriginal - 65;
		var newCode = ((((charCodeOriginal - shiftNumber) % 26) + 26) % 26) + 65;
		cipher += String.fromCharCode(newCode);
	}
	
	var box = document.getElementById('cipher');
	box.value = cipher;
	
}

function cipher_vigenere() {
	
	var key = document.getElementById("key").value;
	var strToCipher = document.getElementById("textToCipher").value;
	var cipher = "";
	
	for(var i = 0; i < strToCipher.length; i++) {
		var keyCode = key.charCodeAt(i % key.length);
		var charCodeOriginal = strToCipher.charCodeAt(i);
		charCodeOriginal = charCodeOriginal - 65;
		var newCode = ((charCodeOriginal + keyCode) % 26) + 65;
		cipher += String.fromCharCode(newCode);
	}
	
	var box = document.getElementById('cipher');
	box.value = cipher;
		
}

function decipher_vigenere() {
	
	var key = document.getElementById("key").value;
	var strToCipher = document.getElementById("textToCipher").value;
	var cipher = "";
	
	for(var i = 0; i < strToCipher.length; i++) {
		var keyCode = key.charCodeAt(i % key.length);
		var charCodeOriginal = strToCipher.charCodeAt(i);
		charCodeOriginal = charCodeOriginal - 65;
		var newCode = ((((charCodeOriginal - keyCode) % 26) + 26) % 26) + 65;
		cipher += String.fromCharCode(newCode);
	}
	
	var box = document.getElementById('cipher');
	box.value = cipher;
		
}
