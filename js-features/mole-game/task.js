const holes = document.querySelectorAll('.hole');
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
let goodClick = dead.textContent;
let badClick = lost.textContent;


for (let i = 0; i < holes.length; i++) {
	holes[i].addEventListener('click', function() {
		if (holes[i].className.includes('hole_has-mole')) {
			goodClick++;
			dead.textContent = goodClick;
		} else {
			badClick++
			lost.textContent = badClick;
		}

		if (goodClick === 10) {
			alert('Вы победили')
			goodClick = 0;
			dead.textContent = goodClick;
			badClick = 0;
			lost.textContent = badClick;
		} else if (badClick === 5) {
			alert('Вы проиграли')
			goodClick = 0;
			dead.textContent = goodClick;
			badClick = 0;
			lost.textContent = badClick;
		}
	});
}