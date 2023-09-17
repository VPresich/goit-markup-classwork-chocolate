const buttonBynowRef = document.querySelector('.buy-now-btn');
const backdropRef = document.querySelector('.backdrop');
const buttonCloseRef = document.querySelector('.close-btn');

buttonBynowRef.addEventListener('click', () => {
backdropRef.classList.add('is-open');
});

buttonCloseRef.addEventListener('click', () => {
backdropRef.classList.remove('is-open');
});