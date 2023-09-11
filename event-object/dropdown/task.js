// let dropdown = document.querySelector('.dropdown');

// dropdown.addEventListener('click', function() {
//     let dropdownList = document.querySelector('.dropdown__list');
//     dropdownList.classList.add('dropdown__list_active');
// });

// let dropdownElements = document.querySelectorAll('.dropdown__link');

// dropdownElements.forEach(function(dropdownElement) {
//     dropdownElement.addEventListener('click', function(event) {
//     event.preventDefault();
//     event.stopPropagation();

//     let dropdown = this.closest('.dropdown');
//     let dropdown__value = this.textContent;
//     dropdown.querySelector('.dropdown__value').textContent = `${dropdown__value}`;

//     let dropdownList = document.querySelector('.dropdown__list');
//     dropdownList.classList.remove('dropdown__list_active');
//     });
// }); //Первая версия кода

let dropdown = document.querySelector('.dropdown');
let dropdownList = dropdown.querySelector('.dropdown__list');
let dropdownValue = dropdown.querySelector('.dropdown__value');

dropdown.addEventListener('click', function(event) {
    if (event.target.classList.contains('dropdown__link')) {
        event.preventDefault();
        event.stopPropagation();

        let dropdown__value = event.target.textContent;
        dropdownValue.textContent = `${dropdown__value}`;
        dropdownList.classList.remove('dropdown__list_active');
    } else {
        dropdownList.classList.add('dropdown__list_active');
    }
});//Вторая версия кода


