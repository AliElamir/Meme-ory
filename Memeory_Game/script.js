//Global Variables
const gameGrid = document.querySelectorAll('div')
console.log(gameGrid)

console.log(gameGrid[1])

let turn = 0
let i = 0
// Game logic

const revealCard = (selection) => {}

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

//Event listeners here

gameGrid.forEach((grid) => {
  grid.addEventListener('click', revealCard)
})
