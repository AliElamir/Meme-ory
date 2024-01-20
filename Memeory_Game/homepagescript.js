//------------------------------------------------------- Global variables ----------------------------------------------------------//

const userTheme = document.querySelectorAll('.themes')

console.log(userTheme)

const userDifficulty = document.querySelectorAll('.difficulty')

console.log(userDifficulty)

//------------------------------------------------------- User Inputs and selection  ----------------------------------------------------------//

let theme = 0
let dif = 0

//------------------------------------------------------- functions  ----------------------------------------------------------//

//user chooses the theme//

userThemeChoice = (choices) => {
  console.log('helo')
  if (choices.target.id === 't1') {
    theme = 1
    console.log(theme)
  } else if (choices.target.id === 't2') {
    theme = 2
    console.log(theme)
  } else if (choices.target.id === 't3') {
    theme = 3
    console.log(theme)
  } else if (choices.target.id === 't4') {
    theme = 4
    console.log(theme)
  } else {
    theme = 0
  }
}

//user chooses the difficulty//

difficultyChoice = (choices) => {
  console.log('difficult in the sense')
  if (choices.target.id === 'd1') {
    dif = 1
    console.log(dif)
  } else if (choices.target.id === 'd2') {
    dif = 2
    console.log(dif)
  } else if (choices.target.id === 'd3') {
    dif = 3
    console.log(dif)
  } else {
    dif = 0
  }
}

//------------------------------------------------------- event handlers  ----------------------------------------------------------//

userTheme.forEach((el) => {
  el.addEventListener('click', userThemeChoice)
})

userDifficulty.forEach((difficulty) => {
  difficulty.addEventListener('click', difficultyChoice)
})
