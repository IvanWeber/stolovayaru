console.log('portfolio-controller.js enabled')

const portfolio = document.querySelector('.portfolio')

const portfolioController = portfolio.querySelector('.portfolio__controller')

const contentItemsArray = portfolio.querySelectorAll('.portfolio__content')
const radioButtonsArray = portfolioController.querySelectorAll('input')



const radioButtonChangeHandler = () => {
  contentItemsArray.forEach((contentItem) => {
    contentItem.classList.add('hidden-completely')
  })

  radioButtonsArray.forEach((radioButton, index) => {
    if (radioButton.checked) {
      contentItemsArray[index].classList.remove('hidden-completely')
    }
  })
}

radioButtonsArray.forEach((radioButton) => {
  radioButton.addEventListener('change', radioButtonChangeHandler)
})


//===========================================================



const changeContentPerTime = () => {
  for (let i = 0; i < radioButtonsArray.length; i++) {
    if (radioButtonsArray[i].checked && i + 1 !== radioButtonsArray.length) {
      radioButtonsArray[i].checked = false
      contentItemsArray[i].classList.add('hidden-completely')
      radioButtonsArray[i + 1].checked = true
      contentItemsArray[i + 1].classList.remove('hidden-completely')
      break
    }
    if (radioButtonsArray[i].checked && i + 1 === radioButtonsArray.length) {
      radioButtonsArray[i].checked = false
      contentItemsArray[i].classList.add('hidden-completely')
      radioButtonsArray[0].checked = true
      contentItemsArray[0].classList.remove('hidden-completely')
      break
    }
  }
}

setInterval(changeContentPerTime, 5000)


