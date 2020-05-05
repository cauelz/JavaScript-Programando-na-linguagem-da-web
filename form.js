// Quando temos um botão que representa o armazenamento de alguma informação ou
// o envio de dados, ao usarmos um evento para detectar esta ação do usuário
// a pagina recarrega e apaga todas as informações preenchidas, assim
// para detectarmos o evento precisamos utilizar a função preventDefault()
// para que o comportamento padrão do HTML não seja usado.

// também temos abaixo a utilização de uma função anonima, que não possui um nome
// e só é utilizada quando chamada diretamente.
// Neste caso, utilizamos uma função anonima dentro do addEventListener com o parâmetro
// "event" para utilizarmos a propriedade preventDefault().

// usamos a propriedade value para ter acesso ao conteudo de cada td
// createElement cria um elemento especificado, no caso uma Tr
// cria a tr e a td do paciente
// adicionando o paciente na tabela.

// podemos ter acesso aos nomes dos inputs com o querySelector



var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();
	
	
	// Identificando informações do paciente do #form-adiciona
	var form = document.querySelector("#form-adiciona");

	// Extraindo informações do paciente do form
	var paciente = obtemPacienteDoFormulario(form);

	var erros = validaPaciente(paciente);

	//validação do paciente
	if(erros.length > 0) {

		exibeMensagemDeErro(erros);

		return; // retorna vazio e não continua
	}

	adicionaPacienteNaTabela(paciente);

	form.reset();
	var mensagensErro = document.querySelector("#mensagens-erro");
	mensagensErro.innerHTML = "";
	
});

function adicionaPacienteNaTabela(paciente) {
	// cria a tr e a td do paciente
	var pacienteTr = montaTr(paciente);
	//adicionando o paciente na tabela
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
}


function exibeMensagemDeErro(erros) {
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";

	erros.forEach (function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	})
}

function obtemPacienteDoFormulario(form) {

	// desta forma abaixo que criamos um objeto, no caso, temos o objeto paciente
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}
	return paciente;
}

function montaTr(paciente) {

	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente")

	// aqui, criamos todos os elementos td.
	// o próximo passo é tornar cada td "filhos" da tr com a função
	// appendChild()
	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;

}

function montaTd (dado,classe) {
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function validaPaciente (paciente) {
	var erros = [];

	// quando temos um IF simples, ele pode seguir o padrão abaixo
	// adicionamos mensagens diferentes dentro do array de acordo com a validação

	if (paciente.nome.length == 0) erros.push("O nome não pode ser em branco");
	if (!validaPeso(paciente.peso)) erros.push("Peso é inválido");
	if (!validaAltura(paciente.altura)) erros.push("Altura é inválida");
	if (paciente.gordura.length == 0) erros.push("A gordura não pode ser em branco");
	if (paciente.peso.length == 0) erros.push("O peso não pode ser em branco");
	if (paciente.altura.length == 0) erros.push("A altura não pode ser em branco");

	return erros;
}