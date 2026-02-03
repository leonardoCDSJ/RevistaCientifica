fetch("dados/estatisticas.json")
	.then(res => res.json())
	.then(dados => {
		const artigos = document.getElementById("total-artigos");
		const edicoes = document.getElementById("total-edicoes");
		const downloads = document.getElementById("total-downloads");
		
		if(!artigos || !edicoes || !downloads) return;
		
		artigos.textContent = dados.artigos;
		edicoes.textContent = dados.edicoes;
		downloads.textContent = dados.downloads;
	});