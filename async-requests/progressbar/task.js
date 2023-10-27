let form = document.getElementById('form');
let progressBar = document.getElementById('progress');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    let url = 'https://students.netoservices.ru/nestjs-backend/upload';
    let data = new FormData(this);
    xhr.open('POST', url);
    xhr.upload.onprogress = function(event) {
        if (event.lengthComputable) {
            let completeStatus = event.loaded / event.total;
            progressBar.value = completeStatus;
        } else {
            console.log('Не удается считать прогресс загрузки');
        }
    }
    xhr.onload = function() {
        if (this.status == 200 || this.status == 201) {
            console.log('Успешно', this.responseText);
        } else {
            console.error('Ошибка:', this.status);
        }
    };
    xhr.send(data);
});