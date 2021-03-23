console.log('eqipment-arrow-changer-1.js enable');

const labelButton = document.querySelector('.equipment__label')
const arrowRight = document.querySelector('.equipment__arrow-right')
const arrowDown = document.querySelector('.equipment__arrow-down')

const labelButtonClickHandler = () => {

  if (arrowDown.classList.contains('hidden-completely')) {
    arrowDown.classList.remove('hidden-completely')
    arrowRight.classList.add('hidden-completely')
  } else {
    arrowRight.classList.remove('hidden-completely')
    arrowDown.classList.add('hidden-completely')
  }
}

labelButton.addEventListener('click', labelButtonClickHandler)