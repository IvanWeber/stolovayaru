console.log('menu-arrow-changer-1.js enable');

const labelButtons = document.querySelectorAll('.menu-label')
const rightArrows = document.querySelectorAll('.menu-label__arrow-right')
const downArrows = document.querySelectorAll('.menu-label__arrow-down')

const labelButtonClickHandler = (arrowRight, arrowDown) => {
  if (arrowDown.classList.contains('hidden-completely')) {
    arrowDown.classList.remove('hidden-completely')
    arrowRight.classList.add('hidden-completely')
  } else {
    arrowRight.classList.remove('hidden-completely')
    arrowDown.classList.add('hidden-completely')
  }
}



labelButtons.forEach((labelButton, index) => {
  labelButton.addEventListener('click', () => {
    labelButtonClickHandler(rightArrows[index], downArrows[index])
  })
})
