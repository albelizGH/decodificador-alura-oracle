const matrizCodigo = [
	["e", "enter"],
	["i", "imes"],
	["a", "ai"],
	["o", "ober"],
	["u", "ufat"],
];

function botonEncriptar() {
	//Tomo el texto ingresado por el usuario
	const textArea = document.querySelector(".text-area");
	if (textArea.value == "") {
		alert("Ingrese texto para encriptar");
		return;
	}

	//Verifico si contiene carácter especial o números
	if (contieneCaracterEspecial(textArea.value)) {
		alert("No se aceptan mayusculas, caracteres especiales ni acentos");
		return;
	}

	//Quito la pantalla que contiene la imagen y los textos
	const imagen = document.querySelector(".mensaje-imagen-no-encontrado");
	imagen.style.display = "none";

	//Alineo el contenido otra vez
	const containerS2 = document.querySelector(".s2-container");
	containerS2.style.justifyContent = "space-between";

	//Aparece el div contenedor del botón copiar
	const botonCopiar = document.querySelector(".copiar-contenedor");
	botonCopiar.style.visibility = "visible"; //Para pantallas grandes, mantiene la caja en su lugar pero invisible
	botonCopiar.style.display = "flex"; //Para pantallas mas pequeñas, hace aparecer la caja con el boton de copiar que estaba desaparecido

	//Devuelve el texto ya cambiado
	const textoTransformado = document.querySelector(".texto-transformado");
	textoTransformado.textContent = encriptar(textArea.value);

	//Limpio pantalla
	textArea.value = "";
}

function botonDesencriptar() {
	//Tomo el texto ingresado por el usuario
	const textArea = document.querySelector(".text-area");
	if (textArea.value == "") {
		alert("Ingrese texto para desencriptar");
		return;
	}

	//Verifico si contiene carácter especial o números
	if (contieneCaracterEspecial(textArea.value)) {
		alert("No se aceptan mayusculas, caracteres especiales ni acentos");
		return;
	}

	//Quito la pantalla que contiene la imagen y los textos
	const imagen = document.querySelector(".mensaje-imagen-no-encontrado");
	imagen.style.display = "none";

	//Alineo el contenido otra vez
	const containerS2 = document.querySelector(".s2-container");
	containerS2.style.justifyContent = "space-between";

	//Aparece el div contenedor del boton copiar
	const botonCopiar = document.querySelector(".copiar-contenedor");
	botonCopiar.style.visibility = "visible"; //Para pantallas grandes, mantiene la caja en su lugar pero invisible
	botonCopiar.style.display = "flex"; //Para pantallas mas pequeñas, hace aparecer la caja con el boton de copiar que estaba desaparecido

	//Devuelve el texto ya cambiado
	const textoTransformado = document.querySelector(".texto-transformado");
	textoTransformado.textContent = desencriptar(textArea.value);

	//Limpio el text-area
	textArea.value = "";
}

function encriptar(inputTexto) {
	for (let i = 0; i < matrizCodigo.length; i++) {
		if (inputTexto.includes(matrizCodigo[i][0])) {
			inputTexto = inputTexto.replaceAll(
				matrizCodigo[i][0],
				matrizCodigo[i][1]
			)
		}
	}
	return inputTexto;
}

function desencriptar(inputTexto) {
	for (let i = 0; i < matrizCodigo.length; i++) {
		if (inputTexto.includes(matrizCodigo[i][1])) {
			inputTexto = inputTexto.replaceAll(
				matrizCodigo[i][1],
				matrizCodigo[i][0]
			);
		}
	}
	return inputTexto;
}

function copiar() {
	const textoTransformado = document.querySelector(".texto-transformado");
	const contenidoACopiar = textoTransformado.textContent;

	navigator.clipboard.writeText(contenidoACopiar).then(() => {
		// Seleccionar mensaje
		alert("Mensaje copiado");
	});
}

function contieneCaracterEspecial(texto) {
	//Validamos que solo se coloquen letras sin caracteres especiales, no se aceptan números
	const caracteresAdmitidos = /[^a-zñ\s]/;
	return caracteresAdmitidos.test(texto);
}
