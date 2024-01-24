//------------------------------------- Importing variables from homepage (user selection)------------------------------------------------//

const exportedTheme = localStorage.getItem('theme')

const exportedSize = localStorage.getItem('size')

//------------------------------------------------------- Global Variables ---------------------------------------------------------------//

const button = document.querySelector('button')

const main = document.querySelector('main')

let themeTitle = document.querySelector('h1')

let gameGrid = document.querySelectorAll('div')

const win = document.querySelector('.winStyle')

const lose = document.querySelector('.loseStyle')

let livesText = document.querySelector('.life')

let notification = document.querySelector('.notifs')

const bodyBackGround = document.querySelector('body')

//------------------------------------------------------- User Inputs and selection  ----------------------------------------------------------//

let themeChoice = parseInt(exportedTheme)

let gridSize = parseInt(exportedSize)

let userLives = 20

//------------------------------------------------------- Themes (Collection of images as classes)---------------------------------------------------------------//
let collection = []

let collectionCartoons = [
  'cartoon1',
  'cartoon2',
  'cartoon3',
  'cartoon4',
  'cartoon1',
  'cartoon2',
  'cartoon3',
  'cartoon4'
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

let collectionWonders = [
  'wonders1',
  'wonders2',
  'wonders3',
  'wonders4',
  'wonders1',
  'wonders2',
  'wonders3',
  'wonders4'
]

let collectionAnimes = [
  'anime1',
  'anime2',
  'anime3',
  'anime4',
  'anime1',
  'anime2',
  'anime3',
  'anime4'
]

let collectionCartoons4x3 = ['cartoon5', 'cartoon5', 'cartoon6', 'cartoon6']

let collectionCartoons4x4 = ['cartoon7', 'cartoon7', 'cartoon8', 'cartoon8']

let collectionAnimals4x3 = ['animal5', 'animal5', 'animal6', 'animal6']

let collectionAnimals4x4 = ['animal7', 'animal7', 'animal8', 'animal8']

let collectionWonders4x3 = ['wonders5', 'wonders5', 'wonders6', 'wonders6']

let collectionWonders4x4 = ['wonders7', 'wonders7', 'wonders8', 'wonders8']

let collectionAnimes4x3 = ['anime5', 'anime5', 'anime6', 'anime6']

let collectionAnimes4x4 = ['anime7', 'anime7', 'anime8', 'anime8']

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

//------------------------------------------------------------ Game Logic----------------------------------------------------------//

//Increases the size of the grid for the user after they increase their grid size//

const addGrids = () => {
  if (gridSize === 1) {
    userLives = 5
    livesText.innerHTML = `lives remaining: ${userLives}`
  } else if (gridSize === 2) {
    userLives = 8
    livesText.innerHTML = `lives remaining: ${userLives}`
    //4x3 grid
    for (let i = 0; i < 4; i++) {
      const gridElements = document.createElement('div')
      main.appendChild(gridElements)
      gridElements.classList.add('black')
    }
  } else if (gridSize === 4) {
    userLives = 10
    livesText.innerHTML = `lives remaining: ${userLives}`
    //4x4 grid
    for (let i = 0; i < 8; i++) {
      const gridElements = document.createElement('div')
      main.appendChild(gridElements)
      gridElements.classList.add('black')
    }
  } else {
  }
}

// adds the shuffled array as classes into each div //

const addImgs = () => {
  if (themeChoice === 1) {
    if (gridSize === 1) {
      array.push(...collectionCartoons)
      shuffleArray(array)
    } else if (gridSize === 2) {
      array.push(...collectionCartoons)
      array.push(...collectionCartoons4x3)
      shuffleArray(array)
    } else if (gridSize === 4) {
      array.push(...collectionCartoons)
      array.push(...collectionCartoons4x3)
      array.push(...collectionCartoons4x4)
      shuffleArray(array)
    }
  } else if (themeChoice === 2) {
    if (gridSize === 1) {
      array.push(...collectionAnimals)
      shuffleArray(array)
    } else if (gridSize === 2) {
      array.push(...collectionAnimals)
      array.push(...collectionAnimals4x3)
      shuffleArray(array)
    } else if (gridSize === 4) {
      array.push(...collectionAnimals)
      array.push(...collectionAnimals4x3)
      array.push(...collectionAnimals4x4)
      shuffleArray(array)
    }
  } else if (themeChoice === 3) {
    if (gridSize === 1) {
      array.push(...collectionWonders)
      shuffleArray(array)
    } else if (gridSize === 2) {
      array.push(...collectionWonders)
      array.push(...collectionWonders4x3)
      shuffleArray(array)
    } else if (gridSize === 4) {
      array.push(...collectionWonders)
      array.push(...collectionWonders4x3)
      array.push(...collectionWonders4x4)
      shuffleArray(array)
    }
  } else {
    if (gridSize === 1) {
      array.push(...collectionAnimes)
      shuffleArray(array)
    } else if (gridSize === 2) {
      array.push(...collectionAnimes)
      array.push(...collectionAnimes4x3)
      shuffleArray(array)
    } else if (gridSize === 4) {
      array.push(...collectionAnimes)
      array.push(...collectionAnimes4x3)
      array.push(...collectionAnimes4x4)
      shuffleArray(array)
    }
  }
}

// Changes the theme title at the top of the page based on their theme choice //

const addThemeTitle = () => {
  if (themeChoice === 1) {
    themeTitle.innerHTML = 'Find all the matching cartoons'
  } else if (themeChoice === 2) {
    themeTitle.innerHTML = 'Find all the matching animals'
  } else if (themeChoice === 3) {
    themeTitle.innerHTML = 'Find the matching wonders of the world!'
  } else {
    themeTitle.innerHTML = 'Match the anime gifs!'
  }
}

// starts the game (called on page load)//

const startGame = () => {
  addGrids()
  addImgs()
  addThemeTitle()
  gameGrid = document.querySelectorAll('div')
  gameGrid.forEach((el, i) => {
    el.classList.add(array[i])
  })
}

// removing the cover class in order to reveal contents under it //
const removeClass = (selection) => {
  if (selection.target.classList.contains('black')) {
    selection.target.classList.remove('black') // To remove the cover class
    divArr.push(selection.target) // pushes what the user selected into divArr
    arr.push(selection.target.classList) // pushes the classlist of what the user selected into arr
    if (arr.length === 2) {
      if (arr[0].value !== arr[1].value) {
        //compares the classlist of the first and second click
        gameGrid.forEach((el) => {
          //remove event listener from all the divs so user cant click on other divs while it shows their selection
          el.removeEventListener('click', removeClass)
        })
        setTimeout(() => {
          revertBlack(divArr) //add the black class back on top of their wrong selection to hide it back into divArr
          playAgain() //adds all the event listeners back again
        }, 1000) // These functions take place after 1 second
        userLives-- //reduces their number of lives after their mistake
        livesText.innerHTML = `lives remaining: ${userLives}`
        notification.classList.add('wnotifs')
        setTimeout(() => {
          notification.classList.remove('wnotifs')
        }, 1000)
        arr = []
      } else {
        notification.classList.add('cnotifs')
        setTimeout(() => {
          notification.classList.remove('cnotifs')
        }, 1000)
        arr = []
        divArr = []
      }
      winScreen()
      loseScreen()
    } else {
      winScreen()
      loseScreen()
    }
  } else {
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
  params.forEach((param) => {
    param.classList.add('black')
  })
}

//Display losing screen when user runs out of lives

const loseScreen = () => {
  if (userLives === 0) {
    lose.style.display = 'block'
  }
}

//Displays winning screen when user matches all the images together

const winScreen = () => {
  const blackEl = document.querySelectorAll('.black')
  if (blackEl.length === 0) {
    win.style.display = 'block'
  }
}

//-------------------------------------------------- Event listeners -------------------------------------------------------//

document.addEventListener('DOMContentLoaded', () => {
  startGame()
  playAgain() //adds event listeners to the appended divs
})

gameGrid.forEach((grid) => {
  grid.addEventListener('click', removeClass)
})
