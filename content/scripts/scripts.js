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

function work() {
	
	if (!$("input[name='method']:checked").val()) {
		alert("CHOOSE A FUCKING METHOD");
		return;
	}
	
	if (!$("input[name='action']:checked").val()) {
		alert("WHAT DO U WANT TO DO FUCKER??");
		return;
	}
	
	if (!$("input[name='message']").val()) {
		alert("cmon man");
		$("input[name='message']").focus();
		return;
	}
	
	var method = document.querySelector('input[name="method"]:checked').value;
	
	if(method == 'vigenere') {
		if (!$("input[name='key']").val()) {
			alert("fuck a key");
			$("input[name='key']").focus();
			return;
		}
	}
	
	var action = document.querySelector('input[name="action"]:checked').value;
	
	var text = document.getElementById("textToCipher").value;
	var result = "";
	
	if(method == 'caesar') {
		var e = document.getElementById("offset");
		var shiftNumber = parseInt(e.options[e.selectedIndex].value);
		var key = String.fromCharCode(shiftNumber + 65);
		if(action == 'cipher') {
			result = cipher(text.toUpperCase(), key.toUpperCase());
		} else {
			result = decipher(text.toUpperCase(), key.toUpperCase());
		}
	} else if(method == 'vigenere') {
		var key = document.getElementsByName('key')[0].value;
		if(action == 'cipher') {
			result = cipher(text.toUpperCase(), key.toUpperCase());
		} else {
			result = decipher(text.toUpperCase(), key.toUpperCase());
		}
	}
	
	var box = document.getElementById('result');
	box.value = result;
	
}

function about() {
	alert("Kevin Amorim");
}

$(document).ready(function () {
	$('#textToCipher').keypress(function(e){
	  if(e.keyCode==13)
	  $('#work').click();
	});
	
	$("input:text").focus(function() { $(this).select(); } );
	$("#textToCipher").keyup(function() {
		if($("input[name='message']").val())
			work();
		else
			var box = document.getElementById('result');
			box.value = "";
	});
});

