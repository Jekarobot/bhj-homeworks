const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');


function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }

modalClose.addEventListener('click', function() {
  modal.classList.remove('modal_active');
  setCookie('modal', 'closed');
});

function getCookie(name) {
    let cookieArr = document.cookie.split('; ');
    for(let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if(name == cookiePair[0]) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

window.addEventListener('load', function() {
  let modalStatus = getCookie('modal')
  if (modalStatus != 'closed') {
    modal.classList.add('modal_active');
  }
});