const items = document.querySelectorAll("img");
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

// slide après
function slideSuivante() {

  items[count].classList.remove('active');

  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  };

  items[count].classList.add('active')
}
suivant.addEventListener('click', slideSuivante);

// slide avant
function slidePrecedente() {
  items[count].classList.remove('active');

  if (count > 0) {
    count--;
  } else {
    count = nbSlide - 1;
  };

  items[count].classList.add('active');
}
precedent.addEventListener('click', slidePrecedente);
