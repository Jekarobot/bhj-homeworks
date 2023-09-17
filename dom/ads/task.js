let ads = document.querySelectorAll('.rotator__case');
let arrAds = Array.from(ads);


function rotate() {
	let a = arrAds.shift();

	let speed = a.dataset.speed;
	let color = a.dataset.color;

	a.style.color = color;

	a.classList.add('rotator__case_active');

	arrAds.forEach(function(ad) {
		ad.classList.remove('rotator__case_active');
		ad.style.color = "";
	});

	arrAds.push(a);

	setTimeout(rotate, speed);
}
rotate();