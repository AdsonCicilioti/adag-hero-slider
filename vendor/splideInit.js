"use-strict";

document.addEventListener(
	"DOMContentLoaded",
	function () {
		var spliders = document.querySelectorAll(".splide");
		console.log(spliders);

		for (let i = 0; i < spliders.length; i++) {
			const el = spliders[i];

			const slides = el.querySelectorAll(".splide__list > *");
			for (let x = 0; x < slides.length; x++) {
				slides[x].classList.add("splide__slide");
			}

			new Splide(el).mount();
		}
	},
	false
);
