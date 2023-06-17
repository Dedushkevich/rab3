const overlay = document.querySelector('.overlay');
const button = document.querySelector('.button');

button.addEventListener('click', ()=>overlay.classList.remove('is-hidden'));
overlay.addEventListener('click', ()=>overlay.classList.add('is-hidden'));