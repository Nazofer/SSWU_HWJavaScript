/*9 Напишіть функцію, яка приймає три виміри цегли: висоту (a), ширину
(b) і глибину (c) і повертає істину, якщо ця цегла може поміститися в отвір з
шириною (w) та висотою (h). Виміри вводить користувач через форму.*/

const doesBrickFit = (a, b, c, w, h) => {
  const [min1, min2] = [a, b, c].sort((x, y) => x - y).slice(0, 2);
  // перевіряємо, чи менші вони за відповідні розміри отвору
  return (min1 <= w && min2 <= h) || (min1 <= h && min2 <= w);
};

const checkBrick = () => {
  const a = parseInt(document.querySelector('.brick-length').value);
  const b = parseInt(document.querySelector('.brick-width').value);
  const c = parseInt(document.querySelector('.brick-height').value);
  const w = parseInt(document.querySelector('.hole-length').value);
  const h = parseInt(document.querySelector('.hole-width').value);
  const result = document.querySelector('.result');
  if (doesBrickFit(a, b, c, w, h)) {
    result.innerHTML = 'Цегла поміщається в отвір';
    result.style.color = 'green';
  } else {
    result.innerHTML = 'Цегла не поміщається в отвір';
    result.style.color = 'red';
  }
};

const form = document.querySelector('.my-form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting
  checkBrick();
});
