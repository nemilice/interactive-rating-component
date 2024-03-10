'use strict';
const selectedRatingEl = document.querySelector('span');
const buttonsContainer = document.querySelector('.card__ratings');
const allBtns = document.querySelectorAll('.btn-circle');
const btnSubmit = document.querySelector('.btn--submit');
const cards = document.querySelectorAll('.card');
let val = 0;

buttonsContainer.addEventListener('click', e => {
  const btnEl = e.target.closest('button');
  if (!btnEl) return;

  allBtns.forEach(btn => {
    if (btnEl !== btn) btn.classList.remove('active');
    else btn.classList.toggle('active');
  });

  val = +btnEl.textContent;
});

btnSubmit.addEventListener('click', () => {
  const checkActive = [...allBtns].filter(btn =>
    btn.classList.contains('active')
  );
  if (checkActive.length === 0) return;

  selectedRatingEl.textContent = val;
  cards.forEach(card => card.classList.toggle('active'));
});
