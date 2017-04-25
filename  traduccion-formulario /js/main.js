
var records = document.getElementById('records');
var usuarios = [];

function Usuario(email,password){
	this.email = email;
	this.password = password;
};

function nuevoUsuario(){
	var correo = document.getElementById('inputPassword').value;
	var usua = document.getElementById('inputEmail').value;
	var usuario  = new Usuario(correo,usua);
	usuarios.push(usuario);
	printHTML(usuario.toHTML());
}

Usuario.prototype.toHTML = function(){
  var html = '';
  html += "Datos de formulario"; + '<br>';
  html += "El correo electrónico ingresado es:" + '<br>';
  html += this.email + '<br>';
  html += "La clave ingresada es:" + '<br>';
  html += this.password + '<br>';
  html += '<br><br>';
  return html;
}


function printHTML (html){
  records.innerHTML = '';
  records.innerHTML = html;
}

function translate(){
	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");

	var remember = document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];

	title.innerHTML = "Por favor inicia sesión";
	email.placeholder = "Correo Electrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML = "Iniciar Sesión";

}

translate();