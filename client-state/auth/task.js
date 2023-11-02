const btn = document.getElementById('signin__btn');
const outBtn = document.getElementById('signout__btn');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
let uniqUser = document.getElementById('user_id');
let savedUser = localStorage.getItem('userId');

document.addEventListener('DOMContentLoaded', function() {
  if (savedUser) {
    welcome.classList.add('welcome_active')
    let userId = savedUser;
    uniqUser.textContent = userId;
  }
});


form.addEventListener('submit', function(event) {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    let formData = new FormData(form);
    let jsonObject = {};
    for (const [key, value]  of formData.entries()) {
        jsonObject[key] = value;
    }

    xhr.open("POST", 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
              let request = JSON.parse(xhr.responseText);

              if (request.success) {
                let userId = request.user_id;
                localStorage.setItem('userId', userId);

                welcome.classList.add('welcome_active')
                uniqUser.textContent = userId;
              } else {
                window.alert("Неверный логин/пароль");
              }
            } else {
                console.log('Ошибка: ' + xhr.status);
            }
        }
    }
    xhr.send(JSON.stringify(jsonObject));
});

outBtn.addEventListener('click', function(event) {
  event.preventDefault();
  welcome.classList.remove('welcome_active');
  localStorage.removeItem('userId');
  form.reset();
});