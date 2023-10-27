let items = document.getElementById('items');

function createValuteEl(itemData) {
	let newEl = document.createElement('div');
	let itemCode = document.createElement('div');
	let itemValue = document.createElement('div');
	let itemCurrency = document.createElement('div');

	newEl.classList.add('item');
	itemCode.classList.add('item__code');
	itemValue.classList.add('item__value');
	itemCurrency.classList.add('item__currency');

	itemCurrency.textContent = 'руб.'
	itemCode.textContent = itemData.CharCode;
	itemValue.textContent = itemData.Value;

	items.appendChild(newEl);
	newEl.appendChild(itemCode);
	newEl.appendChild(itemValue);
	newEl.appendChild(itemCurrency);
}

let savedData = localStorage.getItem('valutes');
if (savedData) {
	let arrValutes = JSON.parse(savedData);
	arrValutes.forEach(element => {
		createValuteEl(element);
	});
}


let xhr = new XMLHttpRequest();
xhr.open("GET", 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);
xhr.onreadystatechange = function() {
	if (xhr.readyState == 4 && xhr.status == 200) {

		let data = JSON.parse(xhr.responseText);

		let valutes = data.response.Valute;

		let arrValutes = Object.values(valutes);

		items.innerHTML = '';

		arrValutes.forEach(element => {
			createValuteEl(element);
		});

		localStorage.setItem('valutes', JSON.stringify(arrValutes));

		let loader = document.getElementById('loader');
		loader.classList.remove('loader_active');
	}
}
xhr.send();