const buttonReviewRef = document.querySelector('.leave-review-btn');
const backdropRef = document.querySelector('.backdrop');
const buttonCloseRef = document.querySelector('.close-btn');

buttonReviewRef.addEventListener('click', () => {
backdropRef.classList.add('is-open');
});

buttonCloseRef.addEventListener('click', () => {
backdropRef.classList.remove('is-open');
});