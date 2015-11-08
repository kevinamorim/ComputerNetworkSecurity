function cipher(plainText, key) {
	
	var result = "";
	
	for(var i = 0; i < plainText.length; i++) {
		var keyCode = key.charCodeAt(i % key.length) - 65;
		var charCodeOriginal = plainText.charCodeAt(i);
		charCodeOriginal = charCodeOriginal - 65;
		var newCode = ((charCodeOriginal + keyCode) % 26) + 65;
		result += String.fromCharCode(newCode);
	}
	
	return result;
}

function decipher(cipherText, key) {
	
	var result = "";
	
	for(var i = 0; i < cipherText.length; i++) {
		var keyCode = key.charCodeAt(i % key.length) - 65;
		var charCodeOriginal = cipherText.charCodeAt(i);
		charCodeOriginal = charCodeOriginal - 65;
		var newCode = ((((charCodeOriginal - keyCode) % 26) + 26) % 26) + 65;
		result += String.fromCharCode(newCode);
	}
	
	return result;
}

function cipher_caesar() {
	
	var e = document.getElementById("shift");
	var shiftNumber = parseInt(e.options[e.selectedIndex].value);
	var key = String.fromCharCode(shiftNumber + 65);
	
	var strToCipher = document.getElementById("textToCipher").value;
	var result = cipher(strToCipher, key);
		
	var box = document.getElementById('cipher');
	box.value = result;
}

function decipher_caesar() {
	
	var e = document.getElementById("shift");
	var shiftNumber = parseInt(e.options[e.selectedIndex].value);
	var key = String.fromCharCode(shiftNumber + 65);
	
	var strToCipher = document.getElementById("textToCipher").value;
	var result = decipher(strToCipher, key);
	
	var box = document.getElementById('cipher');
	box.value = result;
	
}

function cipher_vigenere() {
	
	var key = document.getElementById("key").value;
	var strToCipher = document.getElementById("textToCipher").value;
	var result = cipher(strToCipher, key);

	var box = document.getElementById('cipher');
	box.value = result;
		
}

function decipher_vigenere() {
	
	var key = document.getElementById("key").value;
	var strToCipher = document.getElementById("textToCipher").value;
	var result = decipher(strToCipher, key);
	
	var box = document.getElementById('cipher');
	box.value = result;
		
}


