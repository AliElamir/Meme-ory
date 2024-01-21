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
  localStorage.setItem('theme', theme)
}

//user chooses the grid size//
// arrow function notation was not working. Why?//
function sizeChoice(choices) {
  console.log('size in the sense')
  if (choices.target.id === 'd1') {
    size = 0
    console.log(size)
  } else if (choices.target.id === 'd2') {
    size = 2
    console.log(size)
  } else if (choices.target.id === 'd3') {
    size = 4
    console.log(size)
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

//----------------------------------------------------------------------------------------------------------------------------------//

// let collection = []

// let collectionShrek = [
//   'shrek1',
//   'shrek2',
//   'shrek3',
//   'shrek4',
//   'shrek5',
//   'shrek6'
// ]

// const shrekTest = (x, y) => {
//   for (let i = 0; i < 2; i++) {
//     for (let j = 0; j < 4 + gridSize; j++) {
//       collection.push(y[j])
//     }
//   }
// }

// shrekTest(gridSize, collectionShrek)

// console.log(collection)
