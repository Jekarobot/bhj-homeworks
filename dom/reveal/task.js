const reveals = document.querySelectorAll('.reveal');

const arrReveals = Array.from(reveals);

window.addEventListener('scroll', function() {
	arrReveals.forEach(function(el) {
		const {
			top,
			bottom
		} = el.getBoundingClientRect();

		if (bottom < 0) {
			el.classList.remove("reveal_active");
		} else if (top > window.innerHeight) {
			el.classList.remove("reveal_active");
		} else {
			el.classList.add("reveal_active");
		}
	});
});