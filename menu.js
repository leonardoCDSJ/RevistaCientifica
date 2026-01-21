const btn = document.getElementById("menu");
const nav = document.getElementById("nav-topo");
const links = nav.querySelectorAll("a");

btn.addEventListener("click", () => {
	nav.classList.toggle("open");
});

links.forEach(link => {
	link.addEventListener("click", () => {
		nav.classList.remove("active");
	});
});