let textArea = document.getElementById('editor');
let button = document.getElementById('button');

function saveText() {
    localStorage.setItem('text', textArea.value);
}

window.addEventListener("beforeunload", function() {
    saveText();
});

window.addEventListener('load', function() {
    let savedText = localStorage.getItem('text');
    if (savedText) {
      textArea.value = savedText;
    }
});

button.addEventListener('click', function() {
  textArea.value = "";
});
