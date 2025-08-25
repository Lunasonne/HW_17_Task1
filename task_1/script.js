const elements = document.querySelectorAll('.taskText');

function big() {
  elements.forEach(el => el.classList.add('big-text'));
}

function normal() {
  elements.forEach(el => el.classList.remove('big-text'));
}

function bigNormal() {
  elements.forEach(el => el.classList.toggle('big-text'));
}