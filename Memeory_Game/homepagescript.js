//------------------------------------------------------- Global variables ----------------------------------------------------------//

const userTheme = document.querySelectorAll('.themes')

const userSize = document.querySelectorAll('.size')

const userButton = document.querySelector('button')

//------------------------------------------------------- User Inputs and selection  ----------------------------------------------------------//

let theme = 0
let size = 0

//------------------------------------------------------- functions  ----------------------------------------------------------//

//user chooses the theme//

const userThemeChoice = (choices) => {
  if (choices.target.id === 't1') {
    theme = 1
  } else if (choices.target.id === 't2') {
    theme = 2
  } else if (choices.target.id === 't3') {
    theme = 3
  } else if (choices.target.id === 't4') {
    theme = 4
  } else {
    theme = 0
  }
  localStorage.setItem('theme', theme)
}

//user chooses the grid size//

const sizeChoice = (choices) => {
  if (choices.target.id === 'd1') {
    size = 1
  } else if (choices.target.id === 'd2') {
    size = 2
  } else if (choices.target.id === 'd3') {
    size = 4
  } else {
    size = 0
  }
  localStorage.setItem('size', size)
}

// adds the class clicked which just high lights the choices the user selects

const themeSelected = (selection) => {
  if (selection.target.classList.contains('clicked')) {
    selection.target.classList.remove('clicked')
  } else {
    userTheme.forEach((them) => {
      them.classList.remove('clicked')
    })
    selection.target.classList.add('clicked')
  }
}

// adds the class clicked which just high lights the choices the user selects

const sizeSelected = (selection) => {
  if (selection.target.classList.contains('clicked')) {
    selection.target.classList.remove('clicked')
  } else {
    userSize.forEach((them) => {
      them.classList.remove('clicked')
    })
    selection.target.classList.add('clicked')
  }
}

// both theme and size need to be selected so that the play button appears

const buttonToggle = () => {
  if (theme === 0 || size === 0) {
    userButton.style.display = 'none'
  } else {
    userButton.style.display = 'block'
  }
}

//------------------------------------------------------- event handlers  ----------------------------------------------------------//

userTheme.forEach((themes) => {
  themes.addEventListener('click', userThemeChoice)
  themes.addEventListener('click', themeSelected)
  themes.addEventListener('click', buttonToggle)
})

userSize.forEach((sizes) => {
  sizes.addEventListener('click', sizeChoice)
  sizes.addEventListener('click', sizeSelected)
  sizes.addEventListener('click', buttonToggle)
})

//----------------------------------------------------------------------------------------------------------------------------------/
