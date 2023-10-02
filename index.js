/** @format */

var attempt = 3; // Antal inloggningsförsök
// Klick startar denna funktion
function login() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	if (username == 'Namn' && password == 'pwd') {
		window.alert('Login OK.\nVälkommen');
        window.location.href="secret.html"; // till startsidan
		return false;
	} else {
		attempt--; // minskar antalet försök med 1
		alert('Du har ' + attempt + ' försök kvar.');
		// Stänger fälten efter 3 försök.(DOM)
		if (attempt == 0) {
			document.getElementById('username').disabled = true;
			document.getElementById('password').disabled = true;
			document.getElementById('button').disabled = true;
			return false;
		}
	}
}
