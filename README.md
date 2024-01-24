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

<img src="/images/homepage.png" alt="clickpic" width="680px"/>

---

## The Code Behind The Program:

```
    function nextQuestion() {
        if (!gameEnded) {
            const randomIdx = Math.floor(Math.random()* 10);
            randomQuestion = questions[randomIdx];
            const currentQuestion = randomQuestion.question;
            const choices = randomQuestion.choices;
            questionEl.innerHTML = currentQuestion;
            for (let i = 0; i < choices.length; i++) {
                const choiceEl = choicesEls[i];
                choiceEl.innerHTML = choices[i];
            }
        }
    }
```

---

## Technologies Used

- ![HTML badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- ![JS badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

---

### Contact

Ali Elsayed - ali.elamiir.a@gmail.com
