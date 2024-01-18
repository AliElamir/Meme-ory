//------------------------------------------------------- Global Variables -------------------------------------------------------//
const gameGrid = document.querySelectorAll('div')
console.log(gameGrid)

const button = document.querySelector('button')
console.log(button)

array = ['image1', 'imag1', 'image2', 'image2']

//-------------------------------------------------- Global array and randomizer -------------------------------------------------------//

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    // Swap array[i] and array[j]
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

shuffleArray(array)

console.log(array)

//---------------------------------------------------------- Game Logic-------------------------------------------------------//

// const revealCard = (selection) => {
//   // console.log('samp')
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
//     selection.target.classList.add(array[i])
//   }
// }

const startGame = () => {
  gameGrid.forEach((el, i) => {
    console.log(el)
    el.classList.add(array[i])
  })
}

//-------------------------------------------------- Listening to the events -------------------------------------------------------//

button.addEventListener('click', startGame)

// gameGrid.forEach((grid) => {
//   grid.addEventListener('click', revealCard)
// })

// waste code

// const revealCard = (selection) => {
//   turn++
//   if (turn < 3) {
//     let selection1 = selection.target.classList.add('blue')
//     selection1
//   } else {
//     if (
//       gameGrid[0].classList.contains('blue') &&
//       gameGrid[1].classList.contains('blue')
//     ) {
//       console.log('keep them revealed')
//     } else {
//       const hideCard = () => {
//         selection.target.classList.remove('blue')
//       }
//       setTimeout(hideCard, 1000)
//     }
//     console.log(turn)
//   }
// }
