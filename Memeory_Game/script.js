//------------------------------------------------------- Global Variables ---------------------------------------------------------------//
const gameGrid = document.querySelectorAll('div')
const button = document.querySelector('button')

//------------------------------------------------------- User Inputs and selection  ----------------------------------------------------------//

let themeChoice = 0

let difficulty = 0

//------------------------------------------------------- Collection of images---------------------------------------------------------------//

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

//------------------------------------------------------- Main Array to push images to ------------------------------------------------------//

array = []

let arr = []

let divArr = []
//-------------------------------------------------- Global array and randomizer -------------------------------------------------------//

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    // Swap array[i] and array[j]
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

shuffleArray(collectionShrek)
//---------------------------------------------------------- Game Logic-------------------------------------------------------//

// adds the shuffled array as classes into each div //
const addImgs = () => {
  array.push(...collectionShrek)
}

const startGame = () => {
  addImgs()
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
          //removed event listener from all the divs so user cant click on other divs while it shows their selection
          el.removeEventListener('click', removeClass)
        })
        setTimeout(() => {
          revertBlack(divArr)
          playAgain()
        }, 2000)
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

button.addEventListener('click', startGame)

gameGrid.forEach((grid) => {
  grid.addEventListener('click', removeClass)
})
