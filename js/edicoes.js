fetch("dados/edicoes.json")
	.then(response => response.json())
	.then(edicoes => {
		const container = document.getElementById("lista-edicoes");
		if(!container) return;
		
		edicoes.forEach(ed => {
			container.innerHTML += `
			<div class="edicao">
				<p><strong>Vol. ${ed.volume}, Nº ${ed.numero}</strong>(${ed.ano})<br>
				${ed.periodo}</p>
				
				<a href="${ed.link}">Acessar edição</a>
			</div>
			`;
		});
	});