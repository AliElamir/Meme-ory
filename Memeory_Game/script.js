//------------------------------------------------------- Global Variables ---------------------------------------------------------------//
const gameGrid = document.querySelectorAll('div')
const button = document.querySelector('button')

//------------------------------------------------------- User Inputs and selection  ----------------------------------------------------------//

//------------------------------------------------------- Collection of images---------------------------------------------------------------//

//------------------------------------------------------- Main Array to push images to ------------------------------------------------------//

array = [
  'image1',
  'image1',
  'image2',
  'image2',
  'image3',
  'image3',
  'image4',
  'image4'
]

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

shuffleArray(array)

//---------------------------------------------------------- Game Logic-------------------------------------------------------//

const startGame = () => {
  gameGrid.forEach((el, i) => {
    el.classList.add(array[i])
  })
}

const removeClass = (selection) => {
  selection.target.classList.remove('black')
  divArr.push(selection.target)
  arr.push(selection.target.classList)
  if (arr.length === 2) {
    if (arr[0].value !== arr[1].value) {
      gameGrid.forEach((el) => {
        el.removeEventListener('click', removeClass)
      })
      setTimeout(() => {
        revertBlack(divArr)
        playAgain()
      }, 2000)
      arr = []
    } else {
      arr = []
      //VV in order to clear only the latest selection VV extra game mode
      divArr = []
    }
  } else {
  }
}

const playAgain = () => {
  gameGrid.forEach((el) => {
    el.addEventListener('click', removeClass)
  })
}

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