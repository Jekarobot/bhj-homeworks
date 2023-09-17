let textSizeButtons = document.querySelectorAll('.font-size');
let arrTextSizeButtons = Array.from(textSizeButtons);
let book = document.querySelector('.book');

arrTextSizeButtons.forEach(function(button) {
	button.addEventListener('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		if (!event.target.classList.contains('font-size_active')) {
			arrTextSizeButtons.forEach((b) => {
				b.classList.remove('font-size_active');
			});

			button.classList.add('font-size_active');
		}

		let currentSize = document.querySelector('.font-size_active');

		if (currentSize.classList.contains('font-size_small')) {
			book.classList.add('book_fs-small')
			book.classList.remove('book_fs-big')
		} else if (currentSize.classList.contains('font-size_big')) {
			book.classList.add('book_fs-big')
			book.classList.remove('book_fs-small')
		} else {
			book.classList.remove('book_fs-small')
			book.classList.remove('book_fs-big')
		}
	});
});

let fontColorButtons = document.querySelectorAll('.book__control_color .color');
let arrFontColorButtons = Array.from(fontColorButtons);

arrFontColorButtons.forEach(function(button) {
	button.addEventListener('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		if (!event.target.classList.contains('color_active')) {
			arrFontColorButtons.forEach((b) => {
				b.classList.remove('color_active');
			});

			button.classList.add('color_active');
		}

		let currentFontColor = document.querySelector('.book__control_color .color_active');

		if (currentFontColor.classList.contains('text_color_black')) {
			book.classList.add('book_color-black')
			book.classList.remove('book_color-gray')
			book.classList.remove('book_color-whitesmoke')
		} else if (currentFontColor.classList.contains('text_color_gray')) {
			book.classList.add('book_color-gray')
			book.classList.remove('book_color-whitesmoke')
			book.classList.remove('book_color-black')
		} else if (currentFontColor.classList.contains('text_color_whitesmoke')) {
			book.classList.add('book_color-whitesmoke')
			book.classList.remove('book_color-gray')
			book.classList.remove('book_color-black')
		}
	});
});


let bgColorButtons = document.querySelectorAll('.book__control_background .color');
let arrBgColorButtons = Array.from(bgColorButtons);

arrBgColorButtons.forEach(function(button) {
	button.addEventListener('click', function(event) {
		event.preventDefault();
		event.stopPropagation();

		if (!event.target.classList.contains('color_active')) {
			arrBgColorButtons.forEach((b) => {
				b.classList.remove('color_active');
			});
			button.classList.add('color_active');
		}

		let currentBgColor = document.querySelector('.book__control_background .color_active');

		if (currentBgColor.classList.contains('bg_color_black')) {
			book.classList.add('book_bg-black')
			book.classList.remove('book_bg-gray')
			book.classList.remove('book_bg-white')
		} else if (currentBgColor.classList.contains('bg_color_gray')) {
			book.classList.add('book_bg-gray')
			book.classList.remove('book_bg-white')
			book.classList.remove('book_bg-black')
		} else if (currentBgColor.classList.contains('bg_color_white')) {
			book.classList.add('book_bg-white')
			book.classList.remove('book_bg-gray')
			book.classList.remove('book_bg-black')
		}
	});
});