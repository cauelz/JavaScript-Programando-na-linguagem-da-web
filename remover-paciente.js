// uma propriedade do JavaScript é pode utilizar o event listener a partir da herança
// ou seja, quando clicamos em uma TD podemos utilizar o pai para escutar este evento
// no caso, a propria tabela.


var tabela = document.querySelector("table")

tabela.addEventListener("dblclick", function(evento){


	var alvoEvento = event.target;
	var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover seleciona o pai do alvo
	
	paiDoAlvo.classList.add("fadeOut");

	setTimeout(function(){

		paiDoAlvo.remove();

	}, 500);	

});




// a estratégia abaixo não permite que possamos remover os pacientes que foram
// adicionados depois.
// this.remover()   ---->   remove quem está escutando o evento, no caso, o paciente


// pacientes.forEach(function(paciente) {
//    paciente.addEventListener("dblclick", function() {
//        this.remove(); 
//    });
// });