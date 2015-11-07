function say_hello() {
	
	var e = document.getElementById("shift");
	var shiftNumber = parseInt(e.options[e.selectedIndex].value);
	
	var originalAlphabet = "ABCDEFGHIJLMNOPQRSTUVXZ";
	var newAlphabet = "";
	
	for(var i = 0; i < 23; i++) {
		var newNum = (i + shiftNumber) % 23;
		var code = originalAlphabet.charCodeAt(newNum);
		newAlphabet += String.fromCharCode(code);
	}
	
	alert(newAlphabet);
}

function say_hello_2() {
	
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

function decipher() {
	
	var e = document.getElementById("shift");
	var shiftNumber = parseInt(e.options[e.selectedIndex].value);
	
	var strToCipher = document.getElementById("textToCipher").value;
	var cipher = "";
	
	for(var i = 0; i < strToCipher.length; i++) {
		var charCodeOriginal = strToCipher.charCodeAt(i);
		charCodeOriginal = charCodeOriginal - 65;
		var newCode = ((charCodeOriginal - shiftNumber) % 26) + 65;
		cipher += String.fromCharCode(newCode);
	}
	
	var box = document.getElementById('cipher');
	box.value = cipher;
	
}