console.log('mobile-search.js enable');

const mobileSearchForm = document.querySelector('.mobile-search')
const mobileSearchButton = document. querySelector('.general-menu__mobile-search-icon-button')

const mobileSearchFormClickHandler = () => {

  if (mobileSearchForm.classList.contains('hidden-completely')) {
    mobileSearchForm.classList.remove('hidden-completely')
  } else {
    mobileSearchForm.classList.add('hidden-completely')
  }
}

mobileSearchButton.addEventListener('click', mobileSearchFormClickHandler)