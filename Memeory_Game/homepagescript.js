//------------------------------------------------------- Global variables ----------------------------------------------------------//

const userTheme = document.querySelectorAll('.themes')

console.log(userTheme)

const userSize = document.querySelectorAll('.size')

console.log(userSize)

//------------------------------------------------------- User Inputs and selection  ----------------------------------------------------------//

let theme = 0
let size = 0

//------------------------------------------------------- functions  ----------------------------------------------------------//

//user chooses the theme//

function userThemeChoice(choices) {
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
// arrow function notation was not working. Why?//
function sizeChoice(choices) {
  if (choices.target.id === 'd1') {
    size = 0
  } else if (choices.target.id === 'd2') {
    size = 2
  } else if (choices.target.id === 'd3') {
    size = 4
  } else {
    size = 0
  }
  localStorage.setItem('size', size)
}

//------------------------------------------------------- event handlers  ----------------------------------------------------------//

userTheme.forEach((themes) => {
  themes.addEventListener('click', userThemeChoice)
})

userSize.forEach((sizes) => {
  sizes.addEventListener('click', sizeChoice)
})

//----------------------------------------------------------------------------------------------------------------------------------/
