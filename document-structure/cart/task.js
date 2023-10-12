let products = document.querySelectorAll('.product');
let arrProducts = Array.from(products);

arrProducts.forEach(function(product) {
	let controls = product.querySelectorAll('.product__quantity-control');
	let arrControls = Array.from(controls);

	arrControls.forEach(function(control) {
		control.addEventListener('click', function(event) {
			let productValue = product.querySelector('.product__quantity-value');

			if (control.classList.contains('product__quantity-control_dec')) {
				if (Number(productValue.textContent) > 1) {
					productValue.textContent--
				}
			} else if (control.classList.contains('product__quantity-control_inc')) {
				productValue.textContent++
			}
		});
	});
});

let addButtons = document.querySelectorAll('.product__add');
let arrAddButtons = Array.from(addButtons);

arrAddButtons.forEach(function(button) {
	button.addEventListener('click', function(event) {
		let product = button.closest('.product');
		let cart = document.querySelector('.cart__products');
		let dataID = product.getAttribute('data-id');
		let cartProductExisting = cart.querySelector(`.cart__product[data-id="${dataID}"]`);

		if (cartProductExisting) {
			let productCount = cartProductExisting.querySelector('.cart__product-count');
			let productValue = product.querySelector('.product__quantity-value').textContent;
			productCount.textContent = Number(productCount.textContent) + Number(productValue);

		} else {

			let cartProduct = document.createElement('div');
			let cartProductImage = document.createElement('img');
			let cartProductCount = document.createElement('div');

			cartProduct.classList.add('cart__product');
			cartProductImage.classList.add('cart__product-image');
			cartProductCount.classList.add('cart__product-count');


			dataID = product.getAttribute('data-id');
			cartProduct.setAttribute('data-id', dataID);

			let productImage = product.querySelector('.product__image').src;
			let productCount = product.querySelector('.product__quantity-value').textContent;
			cartProductImage.src = productImage;
			cartProductCount.textContent = productCount;

			cartProduct.appendChild(cartProductImage);
			cartProduct.appendChild(cartProductCount);
			document.querySelector('.cart__products').appendChild(cartProduct);
		}
	})
});