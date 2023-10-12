let extensionTexts = document.querySelectorAll('.has-tooltip');
let arrTexts = Array.from(extensionTexts);

arrTexts.forEach(function(text) {
	text.addEventListener('click', function(event) {
		event.preventDefault();
		event.stopPropagation();

		let oldTips = document.querySelectorAll('.tooltip');
		oldTips.forEach((tip) => {
			tip.remove();
		});
		
		let newTip = document.createElement('div');
		newTip.textContent = text.title;
		newTip.classList.add('tooltip');
		newTip.classList.add('tooltip_active');

		let position = text.getAttribute('data-position')
		switch (position) {
			case 'top':
				newTip.style.bottom = '100%';
				newTip.style.left = '50%';
				newTip.style.transform = 'translateX(-50%)';
				break;
			case 'left':
				newTip.style.right = '100%';
				newTip.style.top = '50%';
				newTip.style.transform = 'translateY(-50%)';
				break;
			case 'right':
				newTip.style.left = '100%';
				newTip.style.top = '50%';
				newTip.style.transform = 'translateY(-50%)';
				break;
			case 'bottom':
				newTip.style.top = '100%';
				newTip.style.left = '50%';
				newTip.style.transform = 'translateX(-50%)';
				break;

			default:
				newTip.style.left = 0;
		}

		text.appendChild(newTip);

	});
});