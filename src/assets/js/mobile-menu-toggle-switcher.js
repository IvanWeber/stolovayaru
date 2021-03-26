console.log('mobile-menu-toggle-switcher.js enable');

const label = document.querySelector('.header-dropdown-menu')
const toggleOpen = document.querySelector('.mobile-menu-toggle--open')
const toggleClosed = document.querySelector('.mobile-menu-toggle--closed')

toggleOpen.addEventListener('click', () => {
    toggleOpen.classList.add('hidden-completely')
    toggleClosed.classList.remove('hidden-completely')
  }
)

toggleClosed.addEventListener('click', () => {
    toggleClosed.classList.add('hidden-completely')
    toggleOpen.classList.remove('hidden-completely')
  }
)

label.addEventListener('click', () => {
  if (toggleClosed.classList.contains('hidden-completely')) {
    toggleClosed.classList.remove('hidden-completely')
    toggleOpen.classList.add('hidden-completely')
  } else {
    toggleOpen.classList.remove('hidden-completely')
    toggleClosed.classList.add('hidden-completely')
  }
})