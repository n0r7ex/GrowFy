const burger = document.querySelector("#burger");

burger.addEventListener("click", () => {
	burger.classList.toggle("menu-open");
	document.body.classList.toggle("menu-open");
	if (burger.classList.contains("menu-open")) document.body.setAttribute("data-scroll", "false");
	if (!burger.classList.contains("menu-open")) document.body.setAttribute("data-scroll", "true");
});
