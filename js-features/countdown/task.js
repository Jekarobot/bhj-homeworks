let timer = document.getElementById('timer');

let time = timer.textContent;

let timeParts = time.split(':');

let hours = parseInt(timeParts[0]);
let minutes = parseInt(timeParts[1]);
let seconds = parseInt(timeParts[2]);

let totalSeconds = hours * 3600 + minutes * 60 + seconds;

let interval = setInterval(() => {
	totalSeconds -= 1;
	hours = Math.floor(totalSeconds / 3600);
	minutes = Math.floor((totalSeconds - hours * 3600) / 60);
	seconds = Math.floor((totalSeconds - (hours * 3600 + minutes * 60)));

	timer.textContent =
		`${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;

	if (totalSeconds === 0) {
		clearInterval(interval);
		alert('Вы победили в конкурсе!');
		let link = document.createElement('a');
		link.href = "Good Mood.rar";
		link.download = 'Good Mood'
		link.click();;
	}
}, 1000);