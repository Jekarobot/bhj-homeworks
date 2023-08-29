let cookie = document.querySelector('.clicker__cookie');
let counter = document.getElementById('clicker__counter');
let count = parseInt(counter.textContent);
let speedCounter = document.getElementById('clicker__speed');
let speed = parseInt(speedCounter.textContent);
let lastClickTime;
let clickCount = 0;

// cookie.onclick = function() {
//   count = count + 1;
//   counter.textContent = `${count}`
//   cookie.style.width = '60%';
//   cookie.style.height = '60%';

//   setInterval(() => {
//     cookie.style.width = '50%';
//     cookie.style.height = '50%';
//   }, 150);
// };
// Это первое решение, без скорости, но мне оно не нравится из-за задержки. Печенька некрасиво меняет размер. Пробую убрать задержку через другие методы.

cookie.addEventListener('mousedown', function() {
	cookie.style.width = '60%';
	cookie.style.height = '60%';
});

cookie.addEventListener('mouseup', function() {
	count = count + 1;
	counter.textContent = `${count}`
	cookie.style.width = '50%';
	cookie.style.height = '50%';

	let now = new Date();
	if (lastClickTime) {
		clickCount++;
		let timeDiff = (now - lastClickTime) / 1000;
		let clicksPerSecond = clickCount / timeDiff;
		speedCounter.textContent = `${clicksPerSecond.toFixed(2)}`;
	} else {
		lastClickTime = now;
		clickCount++;
	}
}); // Вот так вышло более плавно и красиво. Использовал новый каунтер отдельно для скорости, чтобы работали независимо и не поломали друг-друга.