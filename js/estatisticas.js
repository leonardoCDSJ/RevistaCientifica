fetch("dados/estatisticas.json")
	.then(res => res.json())
	.then(dados => {
		document.getElementById("total-artigos").textContent = dados.artigos;
		document.getElementById("total-edicoes").textContent = dados.edicoes;
		document.getElementById("total-downloads").textContent = dados.downloads;
	});