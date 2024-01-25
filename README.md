# Meme-ory

Find all the matching images before you run out of lives!

Play the game here: [Meme-ory Game](https://meme-ory.surge.sh/)

## About the game

Meme-ory is a memory based game where the user has to complete a matching puzzle. The user chooses a theme of their choice along with their grid size if they want a tougher challenge.

<img src="/images/gamepage.png" alt="memeorypic" width="680px"/>

---

## Goal of the game

The user has to match two of the same image together, until they have matched all the images with each other, without running out of lives.

---

## How to play

Choose your theme, number of images (size of your grid) you wish to complete, and then click play!

Click on the boxes to reveal their contents, if the images do not match, they will be hidden. Make sure to remember them to match them with their other pairs later! Also, make sure you dont run out of lives.

<img src="https://media3.giphy.com/media/3hrLxUpp67IpmpZT1h/giphy.gif" alt="clickpic" width="680px"/>

---

## Learnings and the Code Behind The Program:

DOM manipulation and being able to compare element's classes with each other in order to create a logic to hiding and revealing their contents. Below is the main logic of the code, along with it are comments explaining the steps.

```
// The removeClass function handles uncovering contents of the users selection by removing the cover class 'black'//
const removeClass = (selection) => {
  if (selection.target.classList.contains('black')) {
    selection.target.classList.remove('black') // To remove the cover class
    divArr.push(selection.target) // pushes what the user selected into divArr
    arr.push(selection.target.classList) // pushes the classlist of what the user selected into arr
    if (arr.length === 2) {
      if (arr[0].value !== arr[1].value) {
        //compares the classlist of the first and second click
        gameGrid.forEach((el) => {
          //removes event listener from all the divs so user cant click on other divs while it shows their selection
          el.removeEventListener('click', removeClass)
        })
        setTimeout(() => {
          revertBlack(divArr) //add the black class back on top of their wrong selection to hide it back into divArr
          playAgain() //adds all the event listeners back again
        }, 1000) // These functions take place after 1 second
        userLives-- //reduces their number of lives after their mistake
        livesText.innerHTML = `lives remaining: ${userLives}` //displays lives remaining
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
      winScreen() // A function that checks if the user has won
      loseScreen() // A function that checks if the user has lost
    } else {
      winScreen() //
      loseScreen() //
    }
  } else {
  }
}
```

---

## Future Plans

- The themes will be further be turned into categories which will include 3-4 themes for a picture category, 3-4 themes for a music category where the user will try to match the different sounds to each other.

- There will be an option to add a timer for the user to challenge themselves to finish the puzzle under a specific amount of time.

- Difficulty setting so that the images disappear much faster, making it harder for the user to remember the pictures.

## Technologies Used

- ![HTML badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- ![JS badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

---

### Links and credits

Trello Board - [Meme-ory Trello Board](https://trello.com/b/N8h1hk13/meme-ory)

Shuffling function - KhaledHassan [Shuffle Function](https://medium.com/@khaledhassan45/how-to-shuffle-an-array-in-javascript-6ca30d53f772)

### Contact

Ali Elsayed - ali.elamiir.a@gmail.com

Linkedin - ali-elamir@linkedin.com
