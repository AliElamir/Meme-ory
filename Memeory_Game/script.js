//------------------------------------------------------- Importing variables from homepage (user selection)---------------------------------------------------------------//

const exportedTheme = localStorage.getItem('theme')

console.log(exportedTheme)

const exportedSize = localStorage.getItem('size')

console.log(exportedSize)

//------------------------------------------------------- Global Variables ---------------------------------------------------------------//

const button = document.querySelector('button')
const main = document.querySelector('main')
let gameGrid = document.querySelectorAll('div')

//------------------------------------------------------- User Inputs and selection  ----------------------------------------------------------//

let themeChoice = parseInt(exportedTheme)

let gridSize = parseInt(exportedSize)

let userTime = 0

//------------------------------------------------------- Themes (Collection of images)---------------------------------------------------------------//
let collection = []

let collectionShrek = [
  'shrek1',
  'shrek2',
  'shrek3',
  'shrek4',
  'shrek1',
  'shrek2',
  'shrek3',
  'shrek4'
]

let collectionAnimals = [
  'animal1',
  'animal2',
  'animal3',
  'animal4',
  'animal1',
  'animal2',
  'animal3',
  'animal4'
]

let collectionAnimals4x3 = ['animal5', 'animal5', 'animal6', 'animal6']

let collectionAnimals4x4 = ['animal7', 'animal7', 'animal8', 'animal8']

let collectionColors = [
  'image1',
  'image2',
  'image3',
  'image4',
  'image1',
  'image2',
  'image3',
  'image4'
]
//------------------------------------------------------- Main Array to push images to ------------------------------------------------------//

let array = []

let arr = []

let divArr = []
//-------------------------------------------------- Global array and randomizer -------------------------------------------------------//

// referred from internet
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    // Swap array[i] and array[j]
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

// shuffleArray(collectionShrek)
//---------------------------------------------------------- Game Logic-------------------------------------------------------//

//user chooses the grid size//

const addGrids = () => {
  if (gridSize == 0) {
    console.log('grid size is 1')
  } else if (gridSize == 2) {
    //4x3 grid
    for (let i = 0; i < 4; i++) {
      const gridElements = document.createElement('div')
      main.appendChild(gridElements)
      gridElements.classList.add('black')
    }
  } else if (gridSize == 4) {
    //4x3 grid
    for (let i = 0; i < 8; i++) {
      const gridElements = document.createElement('div')
      main.appendChild(gridElements)
      gridElements.classList.add('black')
    }
  } else {
    console.log('grid size is 1')
  }
}

// adds the shuffled array as classes into each div //
const addImgs = () => {
  if (themeChoice === 1) {
    if (gridSize == 0) {
      array.push(...collectionAnimals)
      shuffleArray(array)
    } else if (gridSize == 2) {
      array.push(...collectionAnimals)
      array.push(...collectionAnimals4x3)
      shuffleArray(array)
    } else if (gridSize == 4) {
      array.push(...collectionAnimals)
      array.push(...collectionAnimals4x3)
      array.push(...collectionAnimals4x4)
      shuffleArray(array)
    }
  } else if (themeChoice === 2) {
    if (gridSize == 0) {
      array.push(...collectionAnimals)
      shuffleArray(array)
    } else if (gridSize == 2) {
      array.push(...collectionAnimals)
      array.push(...collectionAnimals4x3)
      shuffleArray(array)
    } else if (gridSize == 4) {
      array.push(...collectionAnimals)
      array.push(...collectionAnimals4x3)
      array.push(...collectionAnimals4x4)
      shuffleArray(array)
    }
  } else if (themeChoice === 3) {
    if (gridSize == 0) {
      array.push(...collectionAnimals)
      shuffleArray(array)
    } else if (gridSize == 2) {
      array.push(...collectionAnimals)
      array.push(...collectionAnimals4x3)
      shuffleArray(array)
    } else if (gridSize == 4) {
      array.push(...collectionAnimals)
      array.push(...collectionAnimals4x3)
      array.push(...collectionAnimals4x4)
      shuffleArray(array)
    }
  } else {
    if (gridSize == 0) {
      array.push(...collectionAnimals)
      shuffleArray(array)
    } else if (gridSize == 2) {
      array.push(...collectionAnimals)
      array.push(...collectionAnimals4x3)
      shuffleArray(array)
    } else if (gridSize == 4) {
      array.push(...collectionAnimals)
      array.push(...collectionAnimals4x3)
      array.push(...collectionAnimals4x4)
      shuffleArray(array)
    }
  }
}

const startGame = () => {
  addGrids()
  addImgs()
  gameGrid = document.querySelectorAll('div')
  gameGrid.forEach((el, i) => {
    el.classList.add(array[i])
  })
}

// removing the cover class in order to reveal contents under it //
const removeClass = (selection) => {
  if (selection.target.classList.contains('black')) {
    selection.target.classList.remove('black')
    divArr.push(selection.target)
    arr.push(selection.target.classList)
    if (arr.length === 2) {
      if (arr[0].value !== arr[1].value) {
        gameGrid.forEach((el) => {
          //remove event listener from all the divs so user cant click on other divs while it shows their selection
          el.removeEventListener('click', removeClass)
        })
        setTimeout(() => {
          revertBlack(divArr)
          playAgain()
        }, 1000)
        arr = []
      } else {
        arr = []
        //VV in order to clear only the latest selection VV extra game mode VV
        divArr = []
      }
    } else {
    }
  } else {
    console.log('already selected')
  }
}

// adds the event listener back to all the divs so the user can click on them again
const playAgain = () => {
  gameGrid.forEach((el) => {
    el.addEventListener('click', removeClass)
  })
}

// adds the cover class onto the wrong choices to cover them again//
const revertBlack = (params) => {
  console.log(params)
  params.forEach((param) => {
    param.classList.add('black')
  })
}

//-------------------------------------------------- Event listeners -------------------------------------------------------//

// referred from internet
document.addEventListener('DOMContentLoaded', () => {
  startGame()
  playAgain()
})

gameGrid.forEach((grid) => {
  grid.addEventListener('click', removeClass)
})
