console.log('mobile-menu-toggle-switcher.js enable');

const label = document.querySelector('.general-menu__menu-checkbox-label')
const toggleOpen = document.querySelector('.mobile-menu-toggle--open')
const toggleClosed = document.querySelector('.mobile-menu-toggle--closed')

label.addEventListener('click', () => {
  if (toggleClosed.classList.contains('hidden-completely')) {
    toggleClosed.classList.remove('hidden-completely')
    toggleOpen.classList.add('hidden-completely')
  } else {
    toggleOpen.classList.remove('hidden-completely')
    toggleClosed.classList.add('hidden-completely')
  }
})