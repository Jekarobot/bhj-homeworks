let xhr = new XMLHttpRequest();
let pollTitle = document.getElementById('poll__title');
let pollAnswers = document.getElementById('poll__answers');
let buttons // Без этого мой outputStatistics() не видел массив

function getPollStatistics(pollId, buttonId) {
	let isDataProcessed = false; // Это понадобилось, чтобы несколько идентичных ответов не дублировали статистику
	let newXhr = new XMLHttpRequest();
	newXhr.open("POST", 'https://students.netoservices.ru/nestjs-backend/poll');
	newXhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	newXhr.send(`vote=${pollId}&answer=${buttonId}`);
	newXhr.onreadystatechange = function() {
		if (newXhr.readyState == 4 && newXhr.status == 200 || newXhr.status == 201) {
			if (newXhr.responseText && !isDataProcessed) {
				try {
					let statistics = JSON.parse(newXhr.responseText);
					let arrStatistics = Object.values(statistics);
					console.log(arrStatistics);
					outputStatistics(arrStatistics);
					isDataProcessed = true;
				} catch (error) {
					console.error('Ошибка при разборе JSON:', error);
				}
			} else {
				console.log('Пустой ответ от сервера или запрос уже обработан');
			}
		} else {
			console.error(`Ошибка: ${newXhr.status}`);
		}
	}
}
// Тут я сначала узнал, что статус 201 тоже норм. Очень долго не мог понять, почему не получается вернуть данные, решил вернуть через console.error. Оставил, на всякий случай :)
// Затем сервер почему-то присылал мне 3 ответа, первый пустой, а 2 и 3 идентичные. Это самая большая проблема. Решил свою проверку замутить isDataProcessed
// Оставил выводы в консоль, чтобы можно было посмотреть процесс отлова всяких приколов от сервера

function outputStatistics(statistics) {
	buttons.forEach((button) => {
		button.remove();
	});

	let totalVotes = 0;
	statistics[0].forEach((item) => {
		totalVotes += item.votes;
	});

	statistics[0].forEach((item) => {
		let newItem = document.createElement('div');
		let newKey = document.createElement('div');
		let newValue = document.createElement('div');

		newKey.textContent = item.answer + ':';
		let percentage = (item.votes / totalVotes) * 100;

		newValue.textContent = percentage.toFixed(2) + '%';
		newValue.style.fontWeight = 'bold';

		newItem.classList.add('statistics__el')

		pollAnswers.appendChild(newItem);
		newItem.appendChild(newKey);
		newItem.appendChild(newValue);
	});
}

xhr.open("GET", 'https://students.netoservices.ru/nestjs-backend/poll', true);
xhr.onreadystatechange = function() {
	if (xhr.readyState == 4 && xhr.status == 200) {
		let request = JSON.parse(xhr.responseText);
		console.log(request);

		let question = request.data.title;
		pollTitle.textContent = question;

		let answers = request.data.answers;

		let pollId = request.id;

		answers.forEach((answer, index) => {
			let newEl = document.createElement('button');
			newEl.classList.add('poll__answer')
			newEl.textContent = answer;
			newEl.id = index;

			pollAnswers.appendChild(newEl);
		});

		buttons = document.querySelectorAll('.poll__answer');

		buttons.forEach(button => {
			button.addEventListener('click', function(event) {
				alert('Спасибо, ваш голос засчитан!')

				let buttonId = event.target.id;
				getPollStatistics(pollId, buttonId);
			});

		});
	}
}
xhr.send();