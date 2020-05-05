
//importante ressaltar que sempre que queremos acessar um conteúdo
//dentro do HTML no JavaScript, precisamos primeiro fazer referência a ele.
//Como? Usando o document.querySelector e document.querySelectorAll (para mais de um iten)
//Podemos até atrelar esta referencia a uma outra variavel para manipularmos posteriormente.






var pacientes = document.querySelectorAll(".paciente");



for(var i = 0; i < pacientes.length; i++) {

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdIMC = paciente.querySelector(".info-imc");


	var validacaoPeso = validaPeso(peso); // true ou false
	var validacaoAltura = validaAltura(altura); // true ou false

	// ! inverte os valores das variaveis
	if (!validacaoPeso) {
		console.log("Peso inválido!");
		tdIMC.textContent = "Peso inválido!";
		validacaoPeso = false;
		paciente.classList.add("paciente-invalido");
	}

	if (!validacaoAltura) {
		console.log("Altura inválida!");
		tdIMC.textContent = "Altura inválida";
		validacaoAltura = false;
		paciente.classList.add("paciente-invalido");
	}

	if (validacaoAltura && validacaoPeso) {
		var imc = calculaImc(peso, altura);
		tdIMC.textContent = imc;
	}

}

function validaPeso (peso) {
	if (peso >= 0 && peso < 1000) {
		return true;
	} else {
		return false;
	}

}

function validaAltura (altura) {
	if (altura >= 0 && altura <= 3.0) {
		return true;
	} else {
		return false;
	}

}

function calculaImc(peso, altura) {
	var imc = 0;

	imc = peso / (altura * altura);

	return imc.toFixed(2);

}


