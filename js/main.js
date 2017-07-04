function validateForm() {
	var password = $('#input-password').val();
	
	var valid = true;

	if (!(/^([a-zñáéíóú]{2,13})+$/.test($("#name").val()))) {
		$("#name").css("border", "1px solid red");
		alert('Error en el nombre');
		valid = false;
	}

	if (!(/^([a-zñáéíóú]{2,13})+$/.test($("#lastname").val()))) {
		$("#lastname").css("border", "1px solid red");
		alert('Error en el apellido');
		valid = false;
	}
	if (!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test($('#input-email').val()))) {
		$("#email").css("border", "1px solid red");
		alert('Error en el email');
		valid = false;
	}

	if (password == "" || password.length < 6 || password == "password" || password == "123456" || password == "098754") {
		$("#password").css("border", "1px solid red");
		alert('Error en la contraseña; debe ser mayor a 6');
		valid = false;
	}

	return valid;
}




