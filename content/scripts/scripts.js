function cipher(strCharCode, keyCharCode) {
	return ((strCharCode + keyCharCode) % 26) + 65;
}

function decipher(strCharCode, keyCharCode) {
	return ((((strCharCode - keyCharCode) % 26) + 26) % 26) + 65;
}

// str  -> String to process
// key  -> Key used to cipher/decipher
// mode -> 0 - decipher ; 1 - cipher
function process(str, key, mode) {

	var result = "";
	var k = 0;
	for(var i = 0; i < str.length; i++) {

		var charCodeOriginal = str.charCodeAt(i);
		if(charCodeOriginal < 65 || charCodeOriginal > 90) {
			continue;
		}

		var keyCode = key.charCodeAt(k % key.length) - 65;
		k++;
		
		charCodeOriginal = charCodeOriginal - 65;

		var newCode = (mode ? cipher(charCodeOriginal, keyCode) : decipher(charCodeOriginal, keyCode));

		result += String.fromCharCode(newCode);
	}
	
	return result;
	
}

function work() {
	
	if (!$("input[name='method']:checked").val()) {
		alert("Please, choose a crypting method");
		return;
	}
	
	if (!$("input[name='action']:checked").val()) {
		alert("Please, select if you want to cipher or decipher");
		return;
	}
	
	if (!$("input[name='message']").val()) {
		alert("Please, write the message you want to encrypt/decrypt");
		$("input[name='message']").focus();
		return;
	}
	
	var method = document.querySelector('input[name="method"]:checked').value;
	
	if(method === 'vigenere') {
		if (!$("input[name='key']").val()) {
			alert("Sorry, we need a key to proceed");
			$("input[name='key']").focus();
			return;
		}
	}
	
	var action = document.querySelector("input[name="action"]:checked").value;
	
	var text = document.getElementById("textToCipher").value;
	var result = "";

	var DECIPHER = 0;
	var CIPHER = 1;
	
	if(method === 'caesar') {
		var e = document.getElementById("offset");
		var shiftNumber = parseInt(e.options[e.selectedIndex].value);
		var key = String.fromCharCode(shiftNumber + 65);
		if(action == 'cipher') {
			result = process(text.toUpperCase(), key.toUpperCase(), CIPHER);
		} else {
			result = process(text.toUpperCase(), key.toUpperCase(), DECIPHER);
		}
	} else if(method == 'vigenere') {
		var key = document.getElementsByName('key')[0].value;
		if(action == 'cipher') {
			result = process(text.toUpperCase(), key.toUpperCase(), CIPHER);
		} else {
			result = process(text.toUpperCase(), key.toUpperCase(), DECIPHER);
		}
	}
	
	return result;
	
}

function update() {
	var result = "";
	if($("input[name='message']").val())
		result = work();

	$("input[name='result']").val(result);
}

function bruteForceAttack() {
	
	var cipherText = document.getElementById("textToCipher").value;
    var $options = $("#brute-force-textarea");
    
    if(cipherText.length == 0) {
        $options.html("CipherText cannot be empty!");
        $options.attr("rows", 1);
        return;
    }
    
    var str = '';
    
    for(var offset = 1; offset <= 25; offset++) {
		var key = String.fromCharCode(offset + 65);
        str += process(cipherText.toUpperCase(), key.toUpperCase(), 0) + (offset < 25 ? '\n' : '');
    }
    
    str += ''
    $options.html(str);
    $options.attr("rows", 25);
	
}

$(document).ready(function () {

	$("input:text").focus(function() { $(this).select(); } );
	$("#textToCipher").keyup(function() {
		update();
	});

	$("#offset").change(function() {
		update();
	});

	$('input[type=radio][name=action]').change(function() {
		update();
	});

	$('input[type=radio][name=method]').change(function() {
		if($('input[type=radio][name=method]:checked').val() == 'caesar')
			update();
		else
			$("input[name='result']").val("");
	});
	
	$("#brute-force-attack").on("click", function() {
        bruteForceAttack();
    });

});

