console.log('file3');

const mobileSearchForm = document.querySelector('.mobile-search')
const mobileSearchButton = document. querySelector('.header__mobile-search-icon-button')

const mobileSearchFormClickHandler = (event) => {

  if (mobileSearchForm.classList.contains('hidden-completely')) {
    mobileSearchForm.classList.remove('hidden-completely')
  } else {
    mobileSearchForm.classList.add('hidden-completely')
  }
}

mobileSearchButton.addEventListener('click', mobileSearchFormClickHandler)